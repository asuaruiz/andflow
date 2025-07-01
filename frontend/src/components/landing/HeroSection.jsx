import React from "react";
import whatsappIcon from "../../assets/icons/whatsapp.png";
import gmailIcon from "../../assets/icons/gmail.png";
import telegramIcon from "../../assets/icons/telegram.png";
import facebookIcon from "../../assets/icons/facebook.png";
import instagramIcon from "../../assets/icons/instagram.png";

function HeroSection() {
  return (
    <section style={{ textAlign: "left", padding: "2rem 1rem", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: 700, lineHeight: "1.3", marginBottom: "1rem" }}>
        Automatiza tareas repetitivas <br />
        y gana tiempo para hacer crecer tu negocio
      </h1>

      <p style={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}>
        Conecta WhatsApp, Shopify, Gmail, Telegram y más… <br />
        sin escribir una sola línea de código.
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", marginBottom: "1.5rem" }}>
        <Feature icon={whatsappIcon} text="Responde automáticamente cotizaciones por" bold="WhatsApp" />
        <Feature icon={gmailIcon} text="Crea tareas en Trello cuando recibes un" bold="email" />
        <Feature icon={telegramIcon} text="Envía recordatorios de pago por" bold="Telegram" />
        <Feature icon={facebookIcon} text="Envía mensajes de bienvenida por" bold="Facebook" />
        <Feature icon={instagramIcon} text="Recibe alertas cuando alguien te escribe por" bold="Instagram" />
      </div>

      <p style={{ color: "#018453", fontSize: "1rem", marginBottom: "1.5rem" }}>
        Hazlo tú o deja que <span style={{ fontWeight: 600, color: "#047f74" }}>andflow lo haga por ti</span>
      </p>

      <button
        style={{
          backgroundColor: "#018453",
          color: "white",
          padding: "14px 28px",
          border: "none",
          borderRadius: 8,
          fontWeight: "bold",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        Quiero automatizar mi negocio
      </button>
    </section>
  );
}

// Subcomponente reutilizable para ítems con íconos
function Feature({ icon, text, bold }) {
  return (
    <div style={{ display: "flex", alignItems: "center", flex: "1 1 300px" }}>
      <img src={icon} alt={bold} style={{ width: 32, marginRight: 12 }} />
      <span style={{ fontSize: "1.05rem" }}>
        {text} <strong>{bold}</strong>
      </span>
    </div>
  );
}

export default HeroSection;
