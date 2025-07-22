// src/services/api.js

// Enviar contacto (ya existente)
export async function enviarMensaje(data) {
  const response = await fetch('http://localhost:3001/api/contacto', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Error al enviar mensaje');
  }

  return await response.json();
}

// 👉 NUEVO: Crear sesión de chat
export async function crearSesionChat(nombre, telefono) {
  const response = await fetch('http://localhost:3001/api/chat/sesion', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre, telefono }),
  });

  if (!response.ok) {
    throw new Error('Error al crear sesión');
  }

  return await response.json(); // debería devolver { id: <session_id> }
}

// 👉 NUEVO: Guardar mensaje de chat
export async function guardarMensajeChat(session_id, from, text) {
  const response = await fetch('http://localhost:3001/api/chat/mensaje', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ session_id, from, text }),
  });

  if (!response.ok) {
    throw new Error('Error al guardar mensaje');
  }

  return await response.json();
}
