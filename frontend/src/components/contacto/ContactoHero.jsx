import React, { useState } from "react";
import { enviarMensaje } from "../../services/api";

const sugerenciasEmail = ["gmail.com", "hotmail.com", "outlook.com", "icloud.com", "yahoo.com"];
const interesesOpciones = [
  "Automatización de WhatsApp",
  "Integración con ERP",
  "Seguimiento de pagos",
  "Actualización de stock",
  "Flujos de atención al cliente",
];

const ContactoHero = ({ onClose }) => {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    pais: "CL",
    mensaje: "",
    interes: "",
    origen: "sitio web",
    utm_source: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [enviado, setEnviado] = useState(false);
  const [sugerencias, setSugerencias] = useState([]);

  const validar = (field = null) => {
    const newErrors = { ...errors };
    if (!field || field === "nombre") {
      if (form.nombre.trim().split(" ").length < 2) {
        newErrors.nombre = "Debe ingresar nombre y apellido.";
      } else {
        delete newErrors.nombre;
      }
    }
    if (!field || field === "correo") {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo)) {
        newErrors.correo = "Correo electrónico inválido.";
      } else {
        delete newErrors.correo;
      }
    }
    if (!field || field === "mensaje") {
      if (form.mensaje.trim().length === 0) {
        newErrors.mensaje = "Debe ingresar un mensaje.";
      } else {
        delete newErrors.mensaje;
      }
    }
    setErrors(newErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "correo") {
      const partes = value.split("@");
      if (partes.length === 2 && partes[1].length > 0) {
        const match = sugerenciasEmail.filter((d) => d.startsWith(partes[1]));
        setSugerencias(match);
      } else {
        setSugerencias([]);
      }
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
    validar(name);
  };

  const handleEmailSugerido = (dominio) => {
    const [local] = form.correo.split("@");
    const nuevoCorreo = `${local}@${dominio}`;
    setForm({ ...form, correo: nuevoCorreo });
    setSugerencias([]);
    validar("correo");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    validar();

    if (Object.keys(errors).length > 0) return;

    try {
      await enviarMensaje(form);
      setEnviado(true);
    } catch {
      setErrors({ general: "Hubo un error al enviar el mensaje." });
    }
  };

  return (
    <div style={modalContentStyle}>
      {enviado ? (
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <h2 style={titleStyle}>¡Gracias por escribirnos!</h2>
          <p style={{ color: "#ccc", marginBottom: "1.5rem" }}>
            Te estaremos contactando a la brevedad para ayudarte. 🎉
          </p>
          <button onClick={onClose} style={buttonStyle}>Cerrar</button>
        </div>
      ) : (
        <>
          <h2 style={titleStyle}>Contáctanos</h2>
          <form onSubmit={handleSubmit}>
            <div style={fieldGroup}>
              <label style={labelStyle}>Nombre Completo *</label>
              <input
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Ej: Andrea Suárez"
                style={inputStyle}
              />
              {touched.nombre && errors.nombre && <div style={errorStyle}>{errors.nombre}</div>}
            </div>

            <div style={fieldGroup}>
              <label style={labelStyle}>Correo Electrónico *</label>
              <input
                name="correo"
                value={form.correo}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="correo@ejemplo.com"
                style={inputStyle}
              />
              {sugerencias.length > 0 && (
                <ul style={suggestionsStyle}>
                  {sugerencias.map((dom, i) => (
                    <li key={i} style={suggestionItemStyle} onClick={() => handleEmailSugerido(dom)}>
                      {form.correo.split("@")[0]}@{dom}
                    </li>
                  ))}
                </ul>
              )}
              {touched.correo && errors.correo && <div style={errorStyle}>{errors.correo}</div>}
            </div>

            <div style={fieldGroup}>
              <label style={labelStyle}>País</label>
              <select name="pais" value={form.pais} onChange={handleChange} style={inputStyle}>
                <option value="CL">🇨🇱 Chile (+56)</option>
                <option value="AR">🇦🇷 Argentina (+54)</option>
                <option value="PE">🇵🇪 Perú (+51)</option>
                <option value="MX">🇲🇽 México (+52)</option>
                <option value="CO">🇨🇴 Colombia (+57)</option>
              </select>
            </div>

            <div style={fieldGroup}>
              <label style={labelStyle}>Teléfono</label>
              <input
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                placeholder="Sin código, solo número local"
                style={inputStyle}
              />
            </div>

            <div style={fieldGroup}>
              <label style={labelStyle}>Área de interés</label>
              <select
                name="interes"
                value={form.interes}
                onChange={handleChange}
                style={{ ...inputStyle, color: form.interes ? "#fff" : "#888" }}
              >
                <option value="">Selecciona una opción</option>
                {interesesOpciones.map((op, i) => (
                  <option key={i} value={op}>{op}</option>
                ))}
              </select>
            </div>

            <div style={fieldGroup}>
              <label style={labelStyle}>Mensaje *</label>
              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={4}
                placeholder="¿En qué te podemos ayudar?"
                style={{ ...inputStyle, resize: "vertical" }}
              />
              {touched.mensaje && errors.mensaje && <div style={errorStyle}>{errors.mensaje}</div>}
            </div>

            {errors.general && <div style={errorStyle}>{errors.general}</div>}

            <button type="submit" style={buttonStyle}>Enviar Mensaje</button>
          </form>
        </>
      )}
    </div>
  );
};

const modalContentStyle = {
  background: "#111",
  color: "#fff",
  padding: "2rem",
  borderRadius: "1rem",
  width: "100%",
  maxWidth: "500px",
  margin: "0 auto",
};
const titleStyle = { fontSize: "1.8rem", marginBottom: "1rem", color: "#00d084" };
const fieldGroup = { marginBottom: "1.5rem" };
const labelStyle = { display: "block", marginBottom: ".5rem", fontWeight: "bold", color: "#ccc" };
const inputStyle = {
  width: "100%",
  padding: "10px",
  fontSize: "1rem",
  borderRadius: "6px",
  border: "1px solid #555",
  backgroundColor: "#222",
  color: "#fff",
};
const errorStyle = { color: "#ff6b6b", fontSize: ".9rem", marginTop: "4px" };
const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#00d084",
  color: "#000",
  border: "none",
  borderRadius: "8px",
  fontWeight: "bold",
  fontSize: "1rem",
  cursor: "pointer",
};
const suggestionsStyle = {
  listStyle: "none",
  padding: 0,
  marginTop: 4,
  backgroundColor: "#000",
  border: "1px solid #00d084",
  borderRadius: 6,
};
const suggestionItemStyle = {
  padding: "6px 10px",
  cursor: "pointer",
  color: "#00d084",
};

export default ContactoHero;
