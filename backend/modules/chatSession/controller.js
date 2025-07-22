import ChatSession from "./model.js";

export async function crearSesion(req, res) {
  const { nombre, telefono } = req.body;

  // Validar nombre
  const partesNombre = nombre.trim().split(/\s+/);
  if (partesNombre.length < 2) {
    return res.status(400).json({ error: "Por favor ingresa tu nombre y apellido" });
  }

  // Validar teléfono (solo números, largo mínimo 9)
  const telefonoLimpio = telefono.replace(/\D/g, "");
  if (telefonoLimpio.length < 9) {
    return res.status(400).json({ error: "El número de teléfono debe tener al menos 9 dígitos" });
  }

  try {
    const sesion = await ChatSession.create({ nombre, telefono: telefonoLimpio });
    res.status(201).json(sesion);
  } catch (error) {
    console.error("Error al crear sesión:", error);
    res.status(500).json({ error: "Error al crear sesión" });
  }
}
