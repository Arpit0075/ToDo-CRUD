import { useState } from "react";
import "./App.css";
import CreateToDo from "./Components/CreateToDo";
import TodoComponent from "./Components/TodoComponent";
import Auth from "./Components/Auth";

function App() {
  const [toDoList, setToDoList] = useState([]);

  return (
    <div style={{ maxWidth: "1600px", textAlign: "center" }}>
      <h1>To-Do List App</h1>
      <CreateToDo setToDoList={setToDoList} />

      <h3>To-do-List</h3>
      {toDoList?.map((todo) => {
        return (
          <div key={todo.id} style={{ marginTop: "2rem" }}>
            <TodoComponent todo={todo} setToDoList={setToDoList} />
          </div>
        );
      })}
      {/* <Auth /> */}
    </div>
  );
}

export default App;
