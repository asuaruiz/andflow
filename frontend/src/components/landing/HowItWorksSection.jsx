import React from "react";
import { Settings, FavoriteBorder, Download } from "@mui/icons-material";

const steps = [
  {
    icon: <Settings sx={{ fontSize: 32, color: "#047f74" }} />,
    title: "1. Elige tu flujo",
    description: ""
  },
  {
    icon: <FavoriteBorder sx={{ fontSize: 32, color: "#047f74" }} />,
    title: "Personalizamos para tu negocio",
    description: ""
  },
  {
    icon: <Download sx={{ fontSize: 32, color: "#047f74" }} />,
    title: "Te llega funcionando en menos de 48 h",
    description: ""
  }
];

function HowItWorksSection() {
  return (
    <section>
      <h2>Cómo funciona</h2>
      <div style={{ display: "flex", gap: 24 }}>
        {steps.map(({ icon, title }, index) => (
          <div key={index} style={{ textAlign: "center", flex: 1 }}>
            {icon}
            <div style={{ fontWeight: 600 }}>{title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorksSection;
