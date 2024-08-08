import { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  background-color: #ff450066;
  margin: 1rem;
  padding: 2rem 4rem;
  border-radius: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 1em;

  div label {
    text-transform: uppercase;
    font-weight: 500;
    margin-right: 1rem;
  }

  div input,
  select {
    padding: 0.6rem;
    border-radius: 10rem;
    border: none;
    width: 20rem;

    &::placeholder {
      padding: 0.5rem;
      font-weight: 400;
    }

    &:focus {
      outline: 3px solid orangered;
    }
  }
`;

const GlobalButton = styled.button`
  position: relative;
  padding: 1rem 4rem;
  background-color: orangered;
  border: none;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 10rem;
  box-sizing: border-box;
  transition: all 0.4s;

  &:hover {
    background-color: #fff;
    color: orangered;
    outline: 2px solid orangered;
    transform: translateY(-3px);
    box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.2);
  }

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 10rem;
    transition: all 0.8s;
  }

  &:hover::after {
    opacity: 0;
    filter: blur(10px);
    transform: scaleX(1.5) scaleY(1.8);
  }
`;

export default function TodoForm({ onAddItem, omShowTodoForm }) {
  const [taskInput, setTaskInput] = useState("");
  const [selectPriority, setSelectPriority] = useState("no");

  function handleSubmit(e) {
    e.preventDefault();

    if (!taskInput) return;
    const id = crypto.randomUUID();
    const newItem = { id, selectPriority, taskInput, finished: false };
    onAddItem(newItem);

    setTaskInput("");
    omShowTodoForm(false);
  }

  return (
    <div>
      <FormContainer onSubmit={handleSubmit}>
        <div>
          <label>Proiority :</label>
          <select
            value={selectPriority}
            onChange={(e) => setSelectPriority(e.target.value)}
          >
            <option value="high">High Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="low">Low Priority</option>
            <option value="no">No Priority</option>
          </select>
        </div>
        <div>
          <label>Task :</label>
          <input
            type="text"
            placeholder="Enter task..."
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
        </div>
        <GlobalButton>Add</GlobalButton>
      </FormContainer>
    </div>
  );
}
