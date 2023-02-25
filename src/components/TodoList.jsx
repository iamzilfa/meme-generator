import React from "react";

const TodoList = ({ name, handleClick }) => {
  return <div onClick={handleClick}>{name}</div>;
};

export default TodoList;
