import { guardarMensaje } from "./service.js";

export const guardarContacto = async (req, res) => {
  try {
    const data = {
      ...req.body,
      ip: req.ip,
      user_agent: req.headers["user-agent"],
    };

    const nuevoMensaje = await guardarMensaje(data);
    res.status(201).json({ success: true, mensaje: nuevoMensaje });
  } catch (error) {
    console.error("Error al guardar contacto:", error);
    res.status(500).json({ success: false, error: "Error interno del servidor" });
  }
};
