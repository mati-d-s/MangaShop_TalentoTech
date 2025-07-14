import styled from "styled-components";

const StyledMain = styled.main`
  padding: 40px 20px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 30px auto;
  font-family: "Segoe UI", sans-serif;

  h2 {
    color: #333;
    font-size: 1.8rem;
    margin-bottom: 15px;
  }

  p {
    color: #555;
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

function Main() {
  return (
    <StyledMain>
      <h2>Contenido Principal</h2>
      <p>Este es un ejemplo de contenido dentro del área principal.</p>
    </StyledMain>
  );
}

export default Main;
