import express from "express";
import { crearSesion } from "../chatSession/controller.js";
import { guardarMensaje } from "../chatMessage/controller.js";

const router = express.Router();

router.post("/sesion", crearSesion);       // POST /api/chat/sesion
router.post("/mensaje", guardarMensaje);   // POST /api/chat/mensaje

export default router;
