import express from 'express';
import cors from 'cors';
import syncDB from './models/index.js';
import contactRoutes from './modules/contact/routes.js';
import chatRoutes from './modules/chat/routes.js';

const app = express();

// CORS
app.use(cors({
  origin: (origin, callback) => callback(null, origin || '*'),
  methods: ['GET', 'POST'],
  credentials: true,
}));

app.use(express.json());

// Rutas
app.use('/api/contacto', contactRoutes);
app.use('/api/chat', chatRoutes);

// Servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, '0.0.0.0', async () => {
  console.log(`🚀 Backend running on port ${PORT}`);
  await syncDB(); // sincroniza todas las tablas al iniciar
});
