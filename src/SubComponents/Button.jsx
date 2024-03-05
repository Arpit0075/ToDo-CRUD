import React from "react";

function Button({ callback }) {
  return (
    <div>
      <button
        style={{ padding: "0.2rem", margin: "0.5rem" }}
        onClick={callback}
      >
        Submit
      </button>
    </div>
  );
}

export default Button;
