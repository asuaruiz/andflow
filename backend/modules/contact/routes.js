// backend/modules/contact/routes.js
import express from 'express';
import ContactMessage from './model.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
      const ip =
        req.headers['x-forwarded-for']?.split(',')[0] || // por si hay proxy
        req.socket?.remoteAddress || // estándar
        req.connection?.remoteAddress || ''; // fallback
  
      const user_agent = req.headers['user-agent'] || '';
  
      const nuevoMensaje = await ContactMessage.create({
        ...req.body,
        ip,
        user_agent,
      });
  
      res.json({ success: true, mensaje: nuevoMensaje });
    } catch (error) {
      console.error('❌ Error al guardar mensaje:', error);
      res.status(500).json({ success: false, error: 'Error al guardar mensaje' });
    }
  });
  

export default router;
