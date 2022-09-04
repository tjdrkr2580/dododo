import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { add_todo } from "./../redux/action";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    margin-right: 0.5rem;
  }
`;

const InputForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    const todo = {
      title: text,
      done: false,
    };
    dispatch(add_todo(todo));
    console.log(todo);
    setText("");
  };

  return (
    <Container>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >
        <input
          type="text"
          placeholder="To do..."
          onChange={handleChange}
          value={text}
        />
        <button>추가하기</button>
      </form>
    </Container>
  );
};

export default InputForm;
