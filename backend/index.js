import express from 'express';
import cors from 'cors';
import syncDB from './models/index.js';
import contactRoutes from './modules/contact/routes.js';

const app = express();

// 🧨 Solución: CORS abierto solo para desarrollo
app.use(cors({
  origin: (origin, callback) => {
    callback(null, origin || '*'); // permite todo origen, incluyendo undefined (como curl, Postman)
  },
  methods: ['GET', 'POST'],
  credentials: true,
}));

app.use(express.json());
app.use('/api/contacto', contactRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, '0.0.0.0', async () => {
  console.log(`🚀 Backend running on port ${PORT}`);
  await syncDB();
});
