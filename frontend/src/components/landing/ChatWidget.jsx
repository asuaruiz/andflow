import React, { useState, useEffect, useRef } from "react";
import { crearSesionChat, guardarMensajeChat } from "../../services/api";

const ChatWidget = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "¡Hola! ¿Cómo te llamas?" }
  ]);
  const [input, setInput] = useState("");
  const [stage, setStage] = useState("ask_name"); // ask_name → ask_phone → chat
  const [sessionId, setSessionId] = useState(null);
  const [error, setError] = useState("");

  const messagesEndRef = useRef(null);
  const firstInteraction = useRef(false);

  useEffect(() => {
    if (firstInteraction.current) {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
      });
    }
  }, [messages]);

  const validarNombre = (nombre) => /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,}$/.test(nombre.trim());
  const validarTelefono = (telefono) => /^\d{8,12}$/.test(telefono.trim());

  const sendMessage = async (from, text, guardar = false) => {
    setMessages((prev) => [...prev, { from, text }]);
    if (guardar && sessionId) {
      await guardarMensajeChat(sessionId, from, text);
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userInput = input.trim();
    firstInteraction.current = true;
    setInput("");
    setError("");

    await sendMessage("user", userInput, true);

    if (stage === "ask_name") {
      if (!validarNombre(userInput)) {
        setError("Por favor ingresa un nombre válido (solo letras, mínimo 2 caracteres)");
        return;
      }
      setStage("ask_phone");
      await sendMessage("bot", "Gracias. ¿Cuál es tu teléfono?");
    } else if (stage === "ask_phone") {
      if (!validarTelefono(userInput)) {
        setError("Ingresa un teléfono válido (8 a 12 dígitos)");
        return;
      }
      try {
        const nombre = messages.find((m) => m.from === "user")?.text || "Desconocido";
        const res = await crearSesionChat(nombre, userInput);
        setSessionId(res.id);
        setStage("chat");
        await sendMessage("bot", "¡Perfecto! Ya puedes contarme tu duda 😊");
      } catch {
        await sendMessage("bot", "Hubo un error creando la sesión. Intenta de nuevo.");
        setStage("ask_name");
      }
    } else {
      // Etapa de conversación normal
      try {
        const res = await guardarMensajeChat(sessionId, "user", userInput);
        if (res?.respuesta) {
          await sendMessage("bot", res.respuesta);
        } else {
          await sendMessage("bot", "Gracias por tu mensaje. Te responderemos pronto 🚀");
        }
      } catch {
        await sendMessage("bot", "Ocurrió un error al procesar tu mensaje.");
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div style={widgetStyle}>
      <div style={headerStyle}>Asistente Virtual 💬</div>

      <div style={chatBoxStyle}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              ...messageStyle,
              alignSelf: msg.from === "user" ? "flex-end" : "flex-start",
              backgroundColor: msg.from === "user" ? "#00d084" : "#333",
              color: msg.from === "user" ? "#000" : "#fff",
            }}
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div style={inputAreaStyle}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Escribe tu mensaje..."
          style={inputStyle}
        />
        <button onClick={handleSend} style={buttonStyle}>Enviar</button>
      </div>
      {error && <div style={errorStyle}>{error}</div>}
    </div>
  );
};

// --- ESTILOS ---
const widgetStyle = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "400px",
  backgroundColor: "#111",
  borderRadius: "1rem",
  overflow: "hidden",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
};

const headerStyle = {
  backgroundColor: "#00d084",
  color: "#000",
  padding: "1rem",
  fontWeight: "bold",
  textAlign: "center",
};

const chatBoxStyle = {
  height: "250px",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  overflowY: "auto",
  backgroundColor: "#222",
  scrollBehavior: "smooth",
  position: "relative"
};

const messageStyle = {
  padding: "0.75rem 1rem",
  borderRadius: "1rem",
  maxWidth: "80%",
  fontSize: "0.95rem",
};

const inputAreaStyle = {
  display: "flex",
  borderTop: "1px solid #444",
  padding: "0.75rem",
  backgroundColor: "#111",
};

const inputStyle = {
  flex: 1,
  padding: "0.5rem 1rem",
  borderRadius: "6px",
  border: "1px solid #555",
  backgroundColor: "#222",
  color: "#fff",
  fontSize: "1rem",
  marginRight: "0.5rem",
};

const buttonStyle = {
  padding: "0.5rem 1.2rem",
  backgroundColor: "#00d084",
  color: "#000",
  border: "none",
  borderRadius: "6px",
  fontWeight: "bold",
  cursor: "pointer",
};

const errorStyle = {
  color: "#f66",
  backgroundColor: "#331",
  padding: "0.5rem 1rem",
  fontSize: "0.9rem",
  textAlign: "center",
};

export default ChatWidget;
