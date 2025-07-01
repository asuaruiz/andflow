import React from "react";

const Footer = () => (
  <footer style={styles.footer}>
    <div>&copy; {new Date().getFullYear()} andflow. Todos los derechos reservados.</div>
  </footer>
);

const styles = {
  footer: {
    padding: "40px 24px",
    textAlign: "center",
    backgroundColor: "#f5f5f5",
    color: "#666",
    fontSize: "14px",
    marginTop: "80px",
  },
};

export default Footer;
