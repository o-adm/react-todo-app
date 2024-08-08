import { useState } from "react";
import Item from "./Item";
import styled from "styled-components";

const TodoItemContainer = styled.div`
  padding: 1rem 2rem;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2em;
`;

const TodoFilter = styled.div`
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);

  & select {
    margin-right: 1rem;
  }
`;

export default function TodoItem({ items, onDelete, onFinished, onClear }) {
  const [sortedItems, setSortedItems] = useState("input");
  let sorted;
  switch (sortedItems) {
    case "input":
      sorted = items;
      break;
    case "ordre":
      sorted = items
        .slice()
        .sort((a, b) => a.taskInput.localeCompare(b.taskInput));
      break;
    case "finished":
      sorted = items
        .slice()
        .sort((a, b) => Number(b.finished) - Number(a.finished));
      break;
    default:
      sorted = items;
  }

  return (
    <>
      <TodoItemContainer>
        {sorted.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDelete={onDelete}
            onFinished={onFinished}
          />
        ))}
      </TodoItemContainer>
      {items.length > 0 && (
        <TodoFilter>
          <select
            value={sortedItems}
            onChange={(e) => setSortedItems(e.target.value)}
          >
            <option value="input">Filter by input</option>
            <option value="ordre">Filter by ordre</option>
            <option value="finished">Filter by finished</option>
          </select>
          <button onClick={onClear}>Clear List</button>
        </TodoFilter>
      )}
    </>
  );
}
