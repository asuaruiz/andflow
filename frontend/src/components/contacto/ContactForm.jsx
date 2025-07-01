import {
    Box,
    TextField,
    Button,
    Typography,
    Grid,
    Paper,
    useMediaQuery,
    useTheme,
  } from "@mui/material";
  import React, { useState } from "react";
  import { enviarMensaje } from "../../services/api";
  
  const ContactForm = () => {
    const [form, setForm] = useState({
      nombre: "",
      correo: "",
      telefono: "",
      mensaje: "",
      interes: "",
    });
  
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await enviarMensaje(form);
        alert("Mensaje enviado correctamente");
        setForm({
          nombre: "",
          correo: "",
          telefono: "",
          mensaje: "",
          interes: "",
        });
      } catch (error) {
        alert("Error al enviar mensaje");
      }
    };
  
    return (
      <Box sx={{ py: 6 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h6" gutterBottom>
            ¿Hablamos?
          </Typography>
          <Typography variant="body2" gutterBottom>
            Cuéntanos en qué necesitas ayuda y nuestro equipo te responderá a la brevedad.
          </Typography>
  
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="nombre"
                  label="Nombre*"
                  fullWidth
                  value={form.nombre}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="correo"
                  label="Correo electrónico*"
                  type="email"
                  fullWidth
                  value={form.correo}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="telefono"
                  label="Teléfono"
                  fullWidth
                  value={form.telefono}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="interes"
                  label="Área de interés"
                  fullWidth
                  value={form.interes}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="mensaje"
                  label="Mensaje*"
                  fullWidth
                  multiline
                  rows={4}
                  value={form.mensaje}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sx={{ textAlign: isMobile ? "center" : "right" }}>
                <Button type="submit" variant="contained">
                  Enviar mensaje
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
    );
  };
  
  export default ContactForm;
  