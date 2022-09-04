import React from "react";
import styled, { ThemeProvider } from "styled-components";
import "./app.css";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";

const Light = {
  color: "black",
  bgColor: "white",
};

const Black = {
  color: "white",
  bgColor: "black",
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <ThemeProvider theme={Light}>
      <Wrapper>
        <h1>Do! Do! Do!</h1>
        <InputForm />
        <TodoList />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
