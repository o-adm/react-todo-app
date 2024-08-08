import styled from "styled-components";

const TodoItem = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

const Priority = styled.span`
  background-color: ${({ $background }) => $background || "#fff"};
  color: #fff;
  display: inline-block;
  padding: 0.2rem 0.8rem;
  border-radius: 1rem;
`;

export default function Item({ item, onDelete, onFinished }) {
  const priority = item.selectPriority;
  return (
    <TodoItem>
      <input
        type="checkbox"
        value={item.finished}
        onChange={() => onFinished(item.id)}
      />
      <div>
        {priority === "low" && (
          <Priority $background="red">{priority}</Priority>
        )}
        {priority === "medium" && (
          <Priority $background="orange">{priority}</Priority>
        )}
        {priority === "high" && (
          <Priority $background="green">{priority}</Priority>
        )}
        {priority === "no" && (
          <Priority $background="grey">{priority} priority</Priority>
        )}
      </div>
      <span style={item.finished ? { textDecoration: "line-through" } : {}}>
        {item.taskInput}
      </span>
      <span
        role="button"
        style={{ cursor: "pointer" }}
        onClick={() => onDelete(item.id)}
      >
        ❌
      </span>
    </TodoItem>
  );
}
