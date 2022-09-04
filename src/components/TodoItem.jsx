import React from "react";
import { useDispatch } from "react-redux";
import { delete_todo, toggle_todo } from "../redux/action";
import styled from "styled-components";

export const Container = styled.section`
  margin: 10px 10px;
  padding: 10px 10px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  border-radius: 4px;
`;

export const TextColumn = styled.section`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const { id, title, done } = todo;
  const handleClick = () => {
    console.log(id, title, done);
    dispatch(delete_todo(id));
  };
  const toggleClick = () => {
    dispatch(toggle_todo(id));
  };
  return (
    <Container>
      <TextColumn>
        <section>{done ? <s>{title}</s> : <>{title}</>}</section>
        <section>
          <button onClick={toggleClick}>V</button>
          <button onClick={handleClick}>X</button>
        </section>
      </TextColumn>
    </Container>
  );
};

export default TodoItem;
