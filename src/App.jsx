import { useState, useEffect } from "react";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  // Persist todos to local storage
  function persistData(updatedTodos) {
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  // Add new todo
  function handleAddTodos(newTodo) {
    if (!newTodo.trim()) return alert("Todo cannot be empty!");
    if (todos.includes(newTodo)) return alert("Todo already exists!");

    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
    persistData(newTodoList); // Save to local storage
  }

  // Delete a todo
  function handleDeleteTodos(index) {
    const newTodoList = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodoList);
    persistData(newTodoList); // Update local storage
  }

  // Edit a todo
  function handleEditTodo(index) {
    setTodoValue(todos[index]); // Set the current value for editing
    handleDeleteTodos(index); // Remove the old value from the list
  }

  // Load todos from local storage on initial render
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos)); // Parse and set stored todos
    }
  }, []);

  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
      />
      <TodoList
        handleDeleteTodos={handleDeleteTodos}
        handleEditTodo={handleEditTodo}
        todos={todos}
      />
    </>
  );
}

export default App;
