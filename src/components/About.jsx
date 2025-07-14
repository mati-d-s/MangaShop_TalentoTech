function About() {
  return (
    <section
      style={{
        padding: "40px 20px",
        maxWidth: "800px",
        margin: "40px auto",
        backgroundColor: "#fff",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        color: "#333",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "20px",
          color: "#ff9800",
          textAlign: "center",
        }}
      >
        Sobre Nosotros
      </h2>
      <p style={{ fontSize: "1.1rem", marginBottom: "16px", textAlign: "justify" }}>
        Bienvenido a MangaShop, tu tienda online especializada en la venta de mangas. Nos apasiona el mundo del manga y trabajamos para ofrecerte los títulos más populares, clásicos y difíciles de encontrar, todo en un solo lugar.
      </p>
      <p style={{ fontSize: "1.1rem", textAlign: "justify" }}>
        Ya seas un lector ocasional o un coleccionista, en nuestra tienda vas a poder comprar tus mangas favoritos de forma fácil, rápida y segura.
      </p>
    </section>
  );
}

export default About;
