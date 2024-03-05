import React from "react";

function CreateToDoInput({ title, id, body, setId, setTitle, setBody }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Add ID"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="Add Title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="Add Body"
        value={body}
        onChange={(e) => {
          setBody(e.target.value);
        }}
      />
      <br />
    </div>
  );
}

export default CreateToDoInput;
