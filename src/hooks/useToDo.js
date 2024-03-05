import { useState } from "react";

export const useToDo = (setToDoList, todo) => {
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");

  const handleDelete = () => {
    setToDoList((prev) => {
      let toDoarray = prev.filter((oneTodo) => {
        return oneTodo.id !== todo.id;
      });
      return toDoarray;
    });
  };

  const handleUpdate = () => {
    let newTodo = { title: newTitle, body: newBody, id: todo.id };
    setToDoList((prev) => {
      return prev.map((onetoDo) => {
        if (onetoDo.id === todo.id) {
          return newTodo;
        } else return onetoDo;
      });
    });
    setNewBody("");
    setNewTitle("");
  };

  return {
    newTitle,
    setNewTitle,
    newBody,
    setNewBody,
    handleDelete,
    handleUpdate,
  };
};
