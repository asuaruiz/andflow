import React, { useState } from "react";
import { enviarMensaje } from "../../services/api";

const ContactoHero = ({ onClose }) => {
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
        origen: "sitio web",
        utm_source: "",
      });
      onClose?.();
    } catch (error) {
      alert("Error al enviar mensaje");
    }
  };

  return (
    <div style={modalContentStyle}>
      <h2 style={titleStyle}>Contáctanos</h2>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <div style={fieldGroup}>
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

        <div style={fieldGroup}>
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

        <div style={fieldGroup}>
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

        <div style={fieldGroup}>
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

        <div style={fieldGroup}>
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

        <button type="submit" style={buttonStyle}>
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
};

// --- Estilos ---
const modalContentStyle = {
  background: "#1e1e1e",
  borderRadius: "20px",
  padding: "2rem",
  width: "100%",
  maxWidth: "500px",
  animation: "fadeInScale 0.3s ease-in-out",
  color: "#fff",
  boxShadow: "0 0 20px rgba(0,0,0,0.6)",
};

const titleStyle = {
  fontSize: "1.8rem",
  fontWeight: "bold",
  marginBottom: "1.5rem",
  textAlign: "center",
  background: "linear-gradient(to right, #00d084, #00796b)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const fieldGroup = {
  marginBottom: "1rem",
};

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
};

export default ContactoHero;
