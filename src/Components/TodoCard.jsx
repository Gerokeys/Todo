import React from "react";

const TodoCard = (props) => {
  const { children, handleDeleteTodos, index, handleEditTodo } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button onClick={()=> {
          handleEditTodo(index)
        }}>
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={()=> {
          handleDeleteTodos(index)
        }}>
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
};

export default TodoCard;
