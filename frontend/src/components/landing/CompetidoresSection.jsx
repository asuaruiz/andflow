import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Divider,
} from "@mui/material";
import { CheckCircle, Cancel } from "@mui/icons-material";
import automation from "../../assets/automation.png";

const comparativo = [
  { atributo: "Fácil de usar", andflow: true },
  { atributo: "Sin código", andflow: true },
  { atributo: "Soporte personalizado por WhatsApp", andflow: true },
  { atributo: "Implementación incluida", andflow: true },
  { atributo: "Costo accesible", andflow: true },
  { atributo: "Listo en 48 horas", andflow: true },
];

const CompetitorsSection = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#f4fdfb",
        py: 10,
        px: { xs: 2, md: 8 },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 6,
          textAlign: "center",
          color: "#047f74",
        }}
      >
        ¿Por qué elegir{" "}
        <Box component="span" sx={{ color: "#00d084" }}>
          andflow
        </Box>
        ?
      </Typography>

      <Grid container spacing={4} alignItems="center">
        {/* Imagen a la izquierda */}
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            component="img"
            src={automation}
            alt="Automatización"
            sx={{
              width: "100%",
              maxWidth: 400,
              height: "auto",
            }}
          />
        </Grid>

        {/* Tabla comparativa */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={4}
            sx={{
              borderRadius: 3,
              overflow: "hidden",
              width: "100%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            {/* Características */}
            <Box
              sx={{
                flex: 1,
                backgroundColor: "#e0f7f4",
                px: 2,
                py: 3,
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", color: "#047f74", mb: 2 }}
              >
                Características
              </Typography>
              {comparativo.map((item, i) => (
                <Box key={i} sx={{ py: 1.5 }}>
                  {item.atributo}
                  <Divider sx={{ mt: 1 }} />
                </Box>
              ))}
            </Box>

            {/* andflow */}
            <Box
              sx={{
                flex: 0.7,
                backgroundColor: "#00d084",
                px: 2,
                py: 3,
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", color: "#fff", mb: 2, textAlign: "center" }}
              >
                andflow
              </Typography>
              {comparativo.map((item, i) => (
                <Box key={i} sx={{ py: 1.5, display: "flex", justifyContent: "center" }}>
                  <CheckCircle sx={{ color: "#fff" }} />
                  <Divider sx={{ mt: 1, borderColor: "rgba(255,255,255,0.2)" }} />
                </Box>
              ))}
            </Box>

            {/* Otros */}
            <Box
              sx={{
                flex: 0.7,
                backgroundColor: "#eeeeee",
                px: 2,
                py: 3,
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", color: "#555", mb: 2, textAlign: "center" }}
              >
                Otros
              </Typography>
              {comparativo.map((_, i) => (
                <Box key={i} sx={{ py: 1.5, display: "flex", justifyContent: "center" }}>
                  <Cancel sx={{ color: "#f44336" }} />
                  <Divider sx={{ mt: 1 }} />
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CompetitorsSection;
