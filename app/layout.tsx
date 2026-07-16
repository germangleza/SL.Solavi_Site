import type { Metadata } from "next";
import Script from "next/script";
import { Manrope, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { site } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: "Equipos para lavandería comercial e industrial | SV Solavi",
    template: "%s | SV Solavi",
  },
  description:
    "Lavadoras, secadoras, equipos de autoservicio, tintorería, planchado y doblado BLCC. Recibe asesoría y cotización con SV Solavi.",
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "SV Solavi",
  },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SV Solavi",
  description:
    "Distribuidor y punto de contacto comercial de equipos BLCC para lavandería comercial e industrial.",
  url: site.baseUrl,
  ...(site.contactEmail && {
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: site.contactEmail,
    },
  }),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${manrope.variable} ${inter.variable}`}>
      <body>
        {/*
          Marca <html> antes del primer paint si la secuencia de entrada del
          Hero ya se reprodujo en esta sesión de pestaña, para no repetirla
          en recargas o al volver a "/" por navegación de cliente.
        */}
        <Script id="hero-intro-guard" strategy="beforeInteractive">
          {`(function(){try{var K="svsolavi-intro-seen";if(sessionStorage.getItem(K)){document.documentElement.classList.add("no-hero-intro");}else{sessionStorage.setItem(K,"1");setTimeout(function(){document.documentElement.classList.add("no-hero-intro");},1300);}}catch(e){}})();`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <a href="#main" className="skip-link">
          Saltar al contenido
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
