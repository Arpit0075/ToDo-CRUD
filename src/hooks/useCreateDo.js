import { useState } from "react";

export const useCreateDo = (setToDoList) => {
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = () => {
    let newTodo = { id, title, body };

    setToDoList((prev) => {
      return [...prev, newTodo];
    });
    setId("");
    setBody("");
    setTitle("");
  };

  return { title, setTitle, id, setId, body, setBody, handleSubmit };
};
