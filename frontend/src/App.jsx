import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {CreateTodo} from "./components/CreateTodo.jsx";
import {Todos} from "./components/Todos.jsx";
//const axios=require('axios');

function App() {
  const [todos, setTodos] = useState([]);
  fetch("http://localhost:3000/todos")
      .then(async function(res){
          const json=await res.json();
          setTodos(json.todos);
      })

  return (

      <div>
        <CreateTodo/>
          <Todos todos={todos}></Todos>
          {/*<Todos todos={[*/}
          {/*    {*/}
          {/*        title: "example title",*/}
          {/*        description: "sample description ",*/}
          {/*        completed: false*/}
          {/*    }*/}
          {/*]}></Todos>*/}
      </div>
  )
}

export default App
