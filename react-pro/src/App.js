import { useState } from "react";
import "./App.css";
import { Todo } from "./Todo/Todo";

function App() {
  const [show,setShow] = useState(true);
  return (
    <div className="App">
      
       <button onClick={()=>setShow(!show)}>
       {show ?  "Hide" : "Show"}Todos
        </button>
        <br />
        {show ?  <Todo /> : null}
    </div>
  );
}

export default App;
