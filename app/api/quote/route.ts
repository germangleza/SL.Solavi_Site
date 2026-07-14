import { NextResponse } from "next/server";

/**
 * Recibe el formulario de cotización y, si existe FORM_ENDPOINT, lo reenvía a
 * ese destino (por ejemplo, un servicio de formularios o un webhook). Mantiene
 * el endpoint del lado del servidor para no exponerlo en el cliente.
 *
 * Si FORM_ENDPOINT no está configurado, responde con éxito para que el
 * formulario sea funcional durante el desarrollo.
 */
export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Solicitud inválida." }, { status: 400 });
  }

  // Validación mínima de campos obligatorios.
  const required = ["nombre", "correo", "telefono", "ciudad", "sector", "privacidad"];
  for (const field of required) {
    if (!data[field]) {
      return NextResponse.json(
        { ok: false, error: `Falta el campo obligatorio: ${field}.` },
        { status: 400 },
      );
    }
  }

  const endpoint = process.env.FORM_ENDPOINT;
  if (endpoint) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        return NextResponse.json(
          { ok: false, error: "No se pudo enviar la solicitud." },
          { status: 502 },
        );
      }
    } catch {
      return NextResponse.json(
        { ok: false, error: "No se pudo enviar la solicitud." },
        { status: 502 },
      );
    }
  }

  return NextResponse.json({ ok: true });
}
