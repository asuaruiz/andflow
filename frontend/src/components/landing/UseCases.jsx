import React from 'react';
import { Box, Grid, Typography, Paper, Avatar } from '@mui/material';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BuildIcon from '@mui/icons-material/Build';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

const cases = [
  {
    icon: <EmojiObjectsIcon fontSize="large" />,
    title: 'Cotizaciones automáticas',
    description: 'Responde solicitudes de cotización por WhatsApp o email, sin intervención humana.',
  },
  {
    icon: <AttachMoneyIcon fontSize="large" />,
    title: 'Seguimiento de pagos',
    description: 'Envía recordatorios automáticos a clientes con cuentas por pagar automáticamente.',
  },
  {
    icon: <BuildIcon fontSize="large" />,
    title: 'Atención postventa',
    description: 'Crea tickets en Trello, Notion o CRM al cerrar una compra.',
  },
  {
    icon: <Inventory2Icon fontSize="large" />,
    title: 'Actualización de stock',
    description: 'Sincroniza productos entre tu tienda y planillas sin mover un dedo.',
  },
  {
    icon: <NotificationsIcon fontSize="large" />,
    title: 'Alertas por menciones',
    description: 'Recibe notificaciones cuando mencionan tu marca en redes.',
  },
  {
    icon: <PersonAddAltIcon fontSize="large" />,
    title: 'Registro de potenciales clientes',
    description: 'Guarda leads desde formularios, chats o marketplaces automáticamente.',
  },
];

export default function UseCases() {
  return (
    <Box  id="casos" sx={{ py: 8, px: 3, backgroundColor: '#f9f9f9' }}>
      <Typography variant="h4" align="center" fontWeight={700} mb={6}>
        Casos de uso reales
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {cases.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                borderRadius: 4,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                transition: 'transform 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <Avatar
                sx={{
                  bgcolor: '#e0f2f1',
                  color: '#004d40',
                  width: 56,
                  height: 56,
                  mb: 2,
                }}
              >
                {item.icon}
              </Avatar>
              <Typography variant="subtitle1" fontWeight={700} gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" maxWidth="90%">
                {item.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
