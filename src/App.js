import { useEffect, useMemo, useState } from "react";

import Header from "./components/Header/Header";
import TodoForm from "./components/TodoForm";
import Button from "./components/Button";
import TodoItem from "./components/TodoItem";
import Footer from "./components/Footer";

export default function App() {
  const [showTodoForm, setShowTodoForm] = useState(false);
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("items");
    return JSON.parse(savedItems) || [];
  });

  const memoizedItems = useMemo(() => items, [items]);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(memoizedItems));
  }, [memoizedItems]);

  function HandleShowTodoForm() {
    setShowTodoForm((show) => !show);
  }

  function HandleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function HandleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function HandleFinishedTask(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, finished: !item.finished } : item
      )
    );
  }

  function HandleClearItems() {
    const confirmed = window.confirm("Are you sure u want to clear the list?");
    if (confirmed) setItems([]);
  }

  return (
    <>
      <Header />
      <Button onClick={() => HandleShowTodoForm()}>+</Button>
      {showTodoForm && (
        <TodoForm onAddItem={HandleAddItem} omShowTodoForm={setShowTodoForm} />
      )}
      <TodoItem
        items={items}
        onDelete={HandleDelete}
        onFinished={HandleFinishedTask}
        onClear={HandleClearItems}
      />
      <Footer items={items} />
    </>
  );
}
