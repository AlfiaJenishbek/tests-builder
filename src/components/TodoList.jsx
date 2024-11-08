import React from "react";
import TodoItem from "./TodoItem";

export const TodoList = ({ test = [] }) => {
  return (
    <ul>
      {test.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </ul>
  );
};


