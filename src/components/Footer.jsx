function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(90deg, #f9a825 0%, #f57f17 100%)",
        padding: "1.8rem 1rem",
        textAlign: "center",
        color: "#fff9e6",
        fontFamily: "'Poppins', sans-serif",
        fontSize: "1rem",
        fontWeight: "500",
        boxShadow: "0 -6px 15px rgba(0, 0, 0, 0.12)",
        borderTopLeftRadius: "16px",
        borderTopRightRadius: "16px",
        userSelect: "none",
      }}
    >
      <p style={{ margin: 0, textShadow: "1px 1px 3px rgba(0,0,0,0.15)" }}>
        &copy; 2025. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
