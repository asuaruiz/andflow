import React, { useState } from "react";
import { enviarMensaje } from "../../services/api";

const ContactoHero = () => {
    const [form, setForm] = useState({
      nombre: "",
      correo: "",
      telefono: "",
      mensaje: "",
      interes: "",
      origen: "sitio web",
      utm_source: "",
    });
    
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await enviarMensaje(form);
      alert("Mensaje enviado correctamente");
      setForm({
        nombre: "",
        correo: "",
        telefono: "",
        mensaje: "",
        interes: "",
      });
    } catch (error) {
      alert("Error al enviar mensaje");
    }
  };

  return (
    <section
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(145deg, #0c0c0c, #1a1a1a)",
        padding: "0 5%",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      {/* Columna Izquierda */}
      <div style={{ flex: 1, color: "#fff" }}>
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 800,
            marginBottom: "1rem",
            background: "linear-gradient(to right, #00d084, #00796b)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          ¿Automatizar las ventas de tu negocio?
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#fff" }}>
          Déjame tu info y escucha una llamada real.
        </p>
      </div>

      {/* Columna Derecha - Formulario */}
      <div
        style={{
          flex: 1,
          background: "rgba(255, 255, 255, 0.03)",
          borderRadius: "20px",
          padding: "2rem",
          maxWidth: "450px",
          margin: "2rem",
          boxShadow: "0 0 40px rgba(0, 0, 0, 0.4)",
          border: "1px solid #00d084",
        }}
      >
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <div style={{ marginBottom: "1rem" }}>
            <label style={labelStyle}>Nombre Completo *</label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              placeholder="Tu nombre"
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label style={labelStyle}>Correo Electrónico *</label>
            <input
              type="email"
              name="correo"
              value={form.correo}
              onChange={handleChange}
              required
              placeholder="correo@ejemplo.com"
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label style={labelStyle}>Teléfono</label>
            <input
              type="tel"
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
              placeholder="+56 9 1234 5678"
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label style={labelStyle}>Área de interés</label>
            <input
              type="text"
              name="interes"
              value={form.interes}
              onChange={handleChange}
              placeholder="Ej: Automatización de WhatsApp"
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label style={labelStyle}>Mensaje *</label>
            <textarea
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Cuéntanos brevemente en qué te podemos ayudar"
              style={{ ...inputStyle, resize: "vertical" }}
            />
          </div>

          <div style={{ marginBottom: "1.5rem", display: "flex", alignItems: "center" }}>
            <input type="checkbox" style={{ marginRight: "10px" }} />
            <label style={{ color: "#fff", fontSize: "0.9rem" }}>
              Acepto recibir mensajes de marketing
            </label>
          </div>

          <button type="submit" style={buttonStyle}>
            ¡Sí! QUIERO MÁS INFO
          </button>
        </form>
      </div>
    </section>
  );
};

// Estilos reutilizables
const labelStyle = {
  display: "block",
  color: "#00d084",
  fontWeight: "bold",
  marginBottom: "6px",
};

const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "12px 14px",
  borderRadius: "8px",
  border: "1px solid #00d084",
  backgroundColor: "#000",
  color: "#fff",
  fontSize: "0.95rem",
};

const buttonStyle = {
  width: "100%",
  padding: "16px",
  borderRadius: "14px",
  border: "none",
  fontWeight: "bold",
  fontSize: "1rem",
  cursor: "pointer",
  background: "linear-gradient(to right, #00d084, #00796b)",
  color: "#000",
  boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
  transition: "transform 0.2s",
};

export default ContactoHero;
