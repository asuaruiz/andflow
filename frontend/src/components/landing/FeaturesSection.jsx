import React from "react";
import { Box, Typography, Button, Container, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const FeaturesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #00d084 0%, #00796b 100%)",
        color: "#fff",
        py: isMobile ? 8 : 12,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          sx={{
            fontSize: isMobile ? "2.2rem" : "3.2rem",
            fontWeight: 700,
            mb: 3,
            lineHeight: 1.3,
          }}
        >
          Automatiza tus procesos <br /> y escala sin límites
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 300,
            fontSize: isMobile ? "1rem" : "1.2rem",
            mb: 4,
            maxWidth: "600px",
          }}
        >
          Conecta herramientas como WhatsApp, Shopify, Gmail y más. Todo sin programar.
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#fff",
            color: "#00796b",
            fontWeight: "bold",
            borderRadius: "8px",
            fontSize: "1rem",
            padding: "14px 28px",
            "&:hover": {
              backgroundColor: "#f1f1f1",
            },
          }}
        >
          Quiero automatizar mi negocio
        </Button>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
