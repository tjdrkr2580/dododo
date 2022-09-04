import React from "react";
import styled, { ThemeProvider } from "styled-components";
import "./app.css";

const Light = {
  color: "black",
  bgColor: "white",
};

const Black = {
  color: "white",
  bgColor: "black",
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <ThemeProvider theme={Light}>
      <Wrapper>
        <h1>Do! Do! Do!</h1>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
