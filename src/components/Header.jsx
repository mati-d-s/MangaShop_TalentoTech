function Header() {
  return (
    <header
      style={{
        background: "linear-gradient(90deg, #f9a825 0%, #f57f17 100%)", // Amarillo cálido y naranja
        padding: "2.5rem 1.5rem",
        textAlign: "center",
        color: "#fff",
        fontFamily: "'Poppins', sans-serif",
        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.12)",
        borderBottomLeftRadius: "16px",
        borderBottomRightRadius: "16px",
        userSelect: "none",
      }}
    >
      <h1
        style={{
          fontSize: "2.8rem",
          margin: 0,
          fontWeight: "700",
          letterSpacing: "0.04em",
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)",
        }}
      >
        Tus mangas preferidos
      </h1>
    </header>
  );
}

export default Header;
