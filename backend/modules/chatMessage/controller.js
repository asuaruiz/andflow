import ChatMessage from "./model.js";
import fetch from "node-fetch";

export async function guardarMensaje(req, res) {
  try {
    const { sessionId, session_id, from, text } = req.body;
    const sid = sessionId || session_id;

    console.log("📥 Request recibido:", { sid, from, text });

    if (!sid || !from || !text) {
      console.warn("⚠️ Datos incompletos:", { sid, from, text });
      return res.status(400).json({ error: "Datos incompletos" });
    }

    console.log("💾 Guardando mensaje en base de datos...");
    await ChatMessage.create({
      session_id: sid,
      from,
      text,
    });
    console.log("✅ Mensaje guardado correctamente.");

    let mensajeBot = null;

    if (from === "user") {
      console.log("🤖 Enviando mensaje a n8n...");

      const respuestaN8n = await fetch("https://automations.andflow.cl/webhook/a2f1f432-206b-418e-be2e-4877214c5d10", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId: sid,
          mensaje: text,
        }),
      });

      console.log("📡 Status respuesta n8n:", respuestaN8n.status);

      if (!respuestaN8n.ok) {
        const text = await respuestaN8n.text();
        console.error("❌ Respuesta de n8n NO OK:", text);
        throw new Error("Error en respuesta de n8n");
      }

      const data = await respuestaN8n.json();
      console.log("📨 Respuesta de n8n recibida:", data);

      mensajeBot = Array.isArray(data) ? data[0]?.respuesta : data?.respuesta;

      if (mensajeBot) {
        console.log("💬 Guardando respuesta del bot en DB...");
        await ChatMessage.create({
          session_id: sid,
          from: "bot",
          text: mensajeBot,
        });
        console.log("✅ Respuesta del bot guardada.");
      } else {
        console.warn("⚠️ Respuesta vacía de n8n:", data);
      }
    }

    const respuestaFinal = from === "user" ? mensajeBot || null : null;
    return res.status(201).json({ ok: true, respuesta: respuestaFinal });

  } catch (error) {
    console.error("💥 Error al guardar mensaje:", error);
    res.status(500).json({ error: "Error al guardar mensaje" });
  }
}
