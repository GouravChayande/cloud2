import React, {useState, useEffect} from 'react';
import {Container} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import TodoForm from './Components/TodoForm';
import Todos from "./Components/Todos"


function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const localTodos = localStorage.getItem("todos")
    if(localTodos){
      setTodos(JSON.parse(localTodos))
    }
  }, [])


  const addTodos = async todo => {
    setTodos([...todos, todo])
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const markComplete = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <Container  style = {
      {
        backgroundColor:"#00CCCD",
        color:"#333",
        paddingTop:"15px"
      }
    }>
        <h1 style = {
          {
            color:"#DAE0E2",
            padding:"10px",
            backgroundColor:"#2C3335",
            textAlign:"center"
          }
        }>TODOS <small class = "text-danger"> using local stroge </small></h1>
        <TodoForm addTodos = {addTodos}/>
        <Todos todos = {todos} markComplete = {markComplete} />
        
    </Container>
    
  );
}

export default App;
