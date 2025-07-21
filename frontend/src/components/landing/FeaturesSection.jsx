import React from "react";
import { Box, Typography, Container, Grid, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BoltIcon from "@mui/icons-material/Bolt";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";

const FeaturesSection = () => {
  return (
    <Box id="bots" sx={{ backgroundColor: "#f9fafb", py: 12 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          gutterBottom
          sx={{ fontSize: "2.2rem", mb: 6, fontFamily: "'Rubik', sans-serif" }}
        >
          Todo lo que necesitas para empezar a automatizar
        </Typography>

        <Grid container spacing={6}>
          {/* Columna 1: Cómo funciona */}
          <Grid item xs={12} md={4}>
            <Box textAlign="center">
              <BoltIcon fontSize="large" sx={{ color: "#018453", mb: 1 }} />
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                ¿Cómo funciona?
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon><CheckCircleIcon color="success" /></ListItemIcon>
                  <ListItemText primary="1. Elige qué quieres automatizar" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckCircleIcon color="success" /></ListItemIcon>
                  <ListItemText primary="2. Conecta tus herramientas favoritas" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckCircleIcon color="success" /></ListItemIcon>
                  <ListItemText primary="3. Activa el bot y deja que trabaje por ti" />
                </ListItem>
              </List>
            </Box>
          </Grid>

          {/* Columna 2: Bots populares */}
          <Grid item xs={12} md={4}>
            <Box textAlign="center">
              <SmartToyIcon fontSize="large" sx={{ color: "#018453", mb: 1 }} />
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Bots más populares
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon><CheckCircleIcon color="success" /></ListItemIcon>
                  <ListItemText primary="Cotizador automático por WhatsApp" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckCircleIcon color="success" /></ListItemIcon>
                  <ListItemText primary="Bot de seguimiento de pagos" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckCircleIcon color="success" /></ListItemIcon>
                  <ListItemText primary="Alerta de pedidos nuevos" />
                </ListItem>
              </List>
            </Box>
          </Grid>

          {/* Columna 3: ¿Es para ti? */}
          <Grid item xs={12} md={4}>
            <Box textAlign="center">
              <PersonSearchIcon fontSize="large" sx={{ color: "#018453", mb: 1 }} />
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                ¿Es para ti?
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon><CheckCircleIcon color="success" /></ListItemIcon>
                  <ListItemText primary="Tienes un negocio con atención digital" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckCircleIcon color="success" /></ListItemIcon>
                  <ListItemText primary="No tienes tiempo para tareas repetitivas" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckCircleIcon color="success" /></ListItemIcon>
                  <ListItemText primary="Quieres automatizar sin programar" />
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
