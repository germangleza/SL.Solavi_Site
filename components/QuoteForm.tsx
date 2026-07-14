"use client";

import { useState, type FormEvent } from "react";
import styles from "./QuoteForm.module.css";

const sectors = [
  "Lavandería de autoservicio",
  "Hotel",
  "Hospital o clínica",
  "Lavandería industrial",
  "Tintorería",
  "Escuela o residencia",
  "Otro",
];

const services = [
  "Electricidad 220 V",
  "Electricidad 380 V trifásica",
  "Vapor",
  "Gas LP",
  "Gas natural",
  "No estoy seguro",
];

type Status = "idle" | "submitting" | "success" | "error";

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      nombre: fd.get("nombre"),
      empresa: fd.get("empresa"),
      correo: fd.get("correo"),
      telefono: fd.get("telefono"),
      ciudad: fd.get("ciudad"),
      sector: fd.get("sector"),
      equipo: fd.get("equipo"),
      capacidad: fd.get("capacidad"),
      kilogramos: fd.get("kilogramos"),
      servicios: fd.getAll("servicios"),
      comentarios: fd.get("comentarios"),
      privacidad: fd.get("privacidad") === "on",
    };

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error ?? "No se pudo enviar la solicitud.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Ocurrió un error. Intenta de nuevo o escríbenos por WhatsApp.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className={styles.success} role="status">
        <span className={styles.successIcon} aria-hidden="true">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
            <path
              d="m5 12.5 4 4L19 7"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h2 className={styles.successTitle}>Gracias por tu mensaje</h2>
        <p>
          Un asesor de SV Solavi revisará tu proyecto y se pondrá en contacto
          contigo.
        </p>
        <button
          type="button"
          className="btn btn--secondary"
          onClick={() => setStatus("idle")}
        >
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="nombre">
            Nombre <span className={styles.req}>*</span>
          </label>
          <input id="nombre" name="nombre" type="text" required autoComplete="name" />
        </div>
        <div className={styles.field}>
          <label htmlFor="empresa">Empresa</label>
          <input id="empresa" name="empresa" type="text" autoComplete="organization" />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="correo">
            Correo <span className={styles.req}>*</span>
          </label>
          <input id="correo" name="correo" type="email" required autoComplete="email" />
        </div>
        <div className={styles.field}>
          <label htmlFor="telefono">
            Teléfono / WhatsApp <span className={styles.req}>*</span>
          </label>
          <input id="telefono" name="telefono" type="tel" required autoComplete="tel" />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="ciudad">
            Ciudad y estado <span className={styles.req}>*</span>
          </label>
          <input id="ciudad" name="ciudad" type="text" required />
        </div>
        <div className={styles.field}>
          <label htmlFor="sector">
            Sector <span className={styles.req}>*</span>
          </label>
          <select id="sector" name="sector" required defaultValue="">
            <option value="" disabled>
              Selecciona una opción
            </option>
            {sectors.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="equipo">Tipo de equipo</label>
          <input
            id="equipo"
            name="equipo"
            type="text"
            placeholder="Lavadora, secadora, calandra…"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="capacidad">Capacidad aproximada</label>
          <input id="capacidad" name="capacidad" type="text" placeholder="Ej. 25 kg" />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="kilogramos">Kilogramos diarios aproximados</label>
        <input id="kilogramos" name="kilogramos" type="text" placeholder="Ej. 300 kg/día" />
      </div>

      <fieldset className={styles.fieldset}>
        <legend>Servicios disponibles</legend>
        <div className={styles.checkboxes}>
          {services.map((service) => (
            <label key={service} className={styles.checkbox}>
              <input type="checkbox" name="servicios" value={service} />
              <span>{service}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className={styles.field}>
        <label htmlFor="comentarios">Comentarios</label>
        <textarea id="comentarios" name="comentarios" rows={4} />
      </div>

      <label className={styles.privacy}>
        <input type="checkbox" name="privacidad" required />
        <span>
          Acepto el tratamiento de mis datos para recibir contacto comercial de SV
          Solavi. <span className={styles.req}>*</span>
        </span>
      </label>

      {status === "error" && (
        <p className={styles.errorMsg} role="alert">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        className="btn btn--primary btn--lg btn--block"
        disabled={status === "submitting"}
        data-analytics="submit_quote_form"
      >
        {status === "submitting" ? "Enviando…" : "Solicitar cotización"}
      </button>
    </form>
  );
}
