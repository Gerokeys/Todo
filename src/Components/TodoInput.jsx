import { useState } from "react";

const TodoInput = (props) => {
  const { handleAddTodos, todoValue, setTodoValue } = props;

  // Function to handle key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTodos(todoValue);
      setTodoValue(""); // Clear the input field after adding
    }
  };

  return (
    <header>
      <input
        type="text"
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        onKeyDown={handleKeyPress} // Add key press event here
        placeholder="Enter Todo"
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
};

export default TodoInput;
