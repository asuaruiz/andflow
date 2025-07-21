import React, { useState } from "react";
import { Button } from "@mui/material";
import logo from "../../assets/logo.png";
import ContactoModal from "../contacto/ContactoModal";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 2rem",
          backgroundColor: "#fff",
          boxShadow: "0px 2px 10px rgba(0,0,0,0.05)",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <img
          src={logo}
          alt="andflow"
          style={{
            height: "36px",
            width: "auto",
            objectFit: "contain",
            marginLeft: "8px",
          }}
        />
        <Button
          variant="contained"
          onClick={() => setOpenModal(true)}
          style={{
            background: "linear-gradient(to right, #00d084, #00796b)",
            borderRadius: "24px",
            padding: "10px 24px",
            fontWeight: "bold",
            textTransform: "none",
          }}
        >
          Empieza ahora
        </Button>
      </header>

      {/* Aquí está el modal reutilizando ContactoHero */}
      <ContactoModal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
};

export default Header;
