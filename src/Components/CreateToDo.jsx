import React from "react";
import { useCreateDo } from "../hooks/useCreateDo";
import CreateToDoInput from "../SubComponents/CreateToDoInput";
import Button from "../SubComponents/Button";

function CreateToDo({ setToDoList }) {
  const { title, setTitle, id, setId, body, setBody, handleSubmit } =
    useCreateDo(setToDoList);

  return (
    <div style={{ margin: "2px" }}>
      <CreateToDoInput
        setId={setId}
        setTitle={setTitle}
        setBody={setBody}
        title={title}
        id={id}
        body={body}
      />
      <Button callback={handleSubmit} />
    </div>
  );
}

export default CreateToDo;
