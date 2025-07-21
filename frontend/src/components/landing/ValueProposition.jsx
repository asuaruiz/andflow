import React from "react";
import { Box, Typography, Container, Button, Grid, Paper } from "@mui/material";

const useCases = [
  {
    title: "Cotizaciones automáticas",
    description: "Genera respuestas instantáneas a solicitudes de cotización vía WhatsApp o email, sin intervención humana.",
  },
  {
    title: "Seguimiento de pagos",
    description: "Envía recordatorios automáticos a clientes con cuentas por pagar a través de WhatsApp o Telegram.",
  },
  {
    title: "Atención postventa",
    description: "Crea tickets o flujos automáticos en Trello, Notion o CRM cuando se finaliza una compra.",
  },
  {
    title: "Actualización de stock",
    description: "Sincroniza productos entre tu tienda, planilla o sistema ERP sin mover un dedo.",
  },
  {
    title: "Alertas por comentarios o menciones",
    description: "Recibe notificaciones instantáneas si alguien comenta en redes sociales o menciona tu marca.",
  },
  {
    title: "Registro de clientes potenciales",
    description: "Guarda nuevos leads automáticamente desde formularios, chats o marketplaces.",
  },
];

function ValueProposition({ onAbrirModal }) {
  return (
    <Box sx={{ py: 14, backgroundColor: "#f4f4f4", textAlign: "center" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            fontSize: "2.7rem",
            mb: 4,
            fontFamily: "'Barlow', sans-serif",
            color: "#065e52",
          }}
        >
          Andflow automatiza tareas críticas para que los negocios escalen sin fricción.
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: "#333",
            fontWeight: 400,
            fontSize: "1.2rem",
            mb: 5,
            maxWidth: "700px",
            mx: "auto",
          }}
        >
          Sin desarrollos eternos ni herramientas complejas. Andflow conecta procesos comerciales, operativos y de atención al cliente con automatizaciones listas para usar, adaptadas a cada negocio.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#666",
            fontSize: "1rem",
            fontStyle: "italic",
            mb: 6,
            maxWidth: "600px",
            mx: "auto",
          }}
        >
          Desde cotizaciones automáticas hasta flujos de seguimiento postventa, Andflow permite a los equipos enfocarse en lo que realmente importa: vender, atender y crecer.
        </Typography>

        <Button
          variant="contained"
          onClick={onAbrirModal} // 🔴 ESTA LÍNEA ES CLAVE
          sx={{
            backgroundColor: "#018453",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "8px",
            fontSize: "1rem",
            padding: "14px 28px",
            mb: 8,
            "&:hover": {
              backgroundColor: "#026a41",
            },
          }}
        >
          Descubre cómo automatizar tu negocio
        </Button>

      </Container>
    </Box>
  );
}

export default ValueProposition;
