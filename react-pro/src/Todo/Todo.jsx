import React, { useEffect, useState } from "react";

export const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoding] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getData();
    return ()=>{
        console.log("clean");
    }
  }, [page]);

  const getData = async () => {
    const data = await fetch(
      `http://localhost:8080/todos?_page=${page}&_limit=3`
    ).then((d) => d.json());
    setTodo(data);
    setLoding(false);
  };
  return loading ? ("Loding......") : (
    <div>
      <h1>Todo</h1>
      <input 
      type="text" 
      placeholder="Enter todo"
      onChange={(e)=>setText(e.target.value)}
      />
      <button
       onClick={()=>{
        const payload={
            title:text,
            status:false,
        };
        fetch("http://localhost:8080/todos",{
            method:"POST",
            headers:{
                "content-type":"application/json",
            },
            body:JSON.stringify(payload),
        }).then(()=>{
            getData();
        })
       }}
      >ADD Todo</button>
      {todo.map((todo, i) => (
        <div key={i.id}>
          <h3>
            {todo.id}:-{todo.title}
          </h3>
        </div>
      ))}
      <br />
      <button onClick={()=>setPage(page-1)}>prev</button>
      <button onClick={()=>setPage(page+1)}>next</button>
    </div>
  );
};
