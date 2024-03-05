import React, { useState } from "react";
import { useToDo } from "../hooks/useToDo";

function TodoComponent({ todo, setToDoList }) {
  const {
    newTitle,
    setNewTitle,
    newBody,
    setNewBody,
    handleDelete,
    handleUpdate,
  } = useToDo(setToDoList, todo);
  // const [newTitle, setNewTitle] = useState("");
  // const [newBody, setNewBody] = useState("");

  // const handleDelete = () => {
  //   setToDoList((prev) => {
  //     let toDoarray = prev.filter((oneTodo) => {
  //       return oneTodo.id !== todo.id;
  //     });
  //     return toDoarray;
  //   });
  // };

  // const handleUpdate = () => {
  //   let newTodo = { title: newTitle, body: newBody, id: todo.id };
  //   setToDoList((prev) => {
  //     return prev.map((onetoDo) => {
  //       if (onetoDo.id === todo.id) {
  //         return newTodo;
  //       } else return onetoDo;
  //     });
  //   });
  //   setNewBody("");
  //   setNewTitle("");
  // };

  return (
    <div style={{ border: "1px solid white", padding: "0.5rem" }}>
      <h3>{todo?.id}</h3>
      <h3>{todo?.title}</h3>
      <input
        placeholder="add new title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <h3>{todo?.body}</h3>
      <input
        placeholder="add new body"
        value={newBody}
        onChange={(e) => setNewBody(e.target.value)}
      />
      <div style={{ display: "flex", justifyContent: "center", gap: "0.2rem" }}>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default TodoComponent;
