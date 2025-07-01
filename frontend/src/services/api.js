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
  