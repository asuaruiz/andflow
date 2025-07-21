import React from 'react';
import { Box, Stack, Typography, Link, IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#0D1B2A',
        color: 'white',
        textAlign: 'center',
        py: 6,
        px: 2,
      }}
    >
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Andflow
      </Typography>
      <Typography variant="body2" color="gray" mb={3}>
        Automatiza. Escala. Libérate del trabajo repetitivo.
      </Typography>

      <Stack direction="row" spacing={3} justifyContent="center" mb={3}>
        <Link href="#inicio" underline="none" color="inherit">Inicio</Link>
        <Link href="#bots" underline="none" color="inherit">Bots</Link>
        <Link href="#casos" underline="none" color="inherit">Casos de uso</Link>
        <Link href="#contacto" underline="none" color="inherit">Contacto</Link>
      </Stack>

      <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
        <IconButton href="https://wa.me/56912345678" target="_blank" sx={{ color: 'white' }}>
          <WhatsAppIcon />
        </IconButton>
        <IconButton href="mailto:contacto@andflow.cl" sx={{ color: 'white' }}>
          <EmailIcon />
        </IconButton>
        <IconButton href="https://instagram.com/andflow.cl" target="_blank" sx={{ color: 'white' }}>
          <InstagramIcon />
        </IconButton>
      </Stack>

      <Typography variant="caption" color="gray">
        © 2025 Andflow. Todos los derechos reservados.
      </Typography>
    </Box>
  );
}
