function Contacto() {
  return (
    <section
      style={{
        maxWidth: "400px",
        margin: "2rem auto",
        padding: "2rem",
        backgroundColor: "#fff8e1",
        borderRadius: "16px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
        fontFamily: "'Poppins', sans-serif",
        color: "#333",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginBottom: "1rem", color: "#f9a825" }}>
        📬 Contáctanos
      </h2>
      <p style={{ marginBottom: "1.5rem" }}>
        Estamos trabajando para ti. Pronto podrás enviarnos un mensaje directamente desde aquí.
      </p>

      <form>
        <input
          type="text"
          placeholder="Tu nombre"
          style={inputStyle}
          disabled
        />
        <input
          type="email"
          placeholder="Tu correo"
          style={inputStyle}
          disabled
        />
        <textarea
          placeholder="Tu mensaje"
          rows="4"
          style={{ ...inputStyle, resize: "none" }}
          disabled
        />
        <button
          type="submit"
          disabled
          style={{
            ...buttonStyle,
            backgroundColor: "#ccc",
            cursor: "not-allowed",
          }}
        >
          Enviar (próximamente)
        </button>
      </form>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px 15px",
  marginBottom: "12px",
  borderRadius: "12px",
  border: "1px solid #ddd",
  fontSize: "1rem",
  fontFamily: "'Poppins', sans-serif",
  outline: "none",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  padding: "12px 15px",
  borderRadius: "12px",
  border: "none",
  backgroundColor: "#f9a825",
  color: "#fff",
  fontWeight: "600",
  fontSize: "1rem",
  cursor: "pointer",
  transition: "background-color 0.25s ease",
};

export default Contacto;
