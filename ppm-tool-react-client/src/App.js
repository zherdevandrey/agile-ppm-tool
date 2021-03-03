import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import DashBoard from './components/DashBoard';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProject from './Project/AddProject';
import { Provider } from "react-redux";
import store from "./store";
import UpdateProject from './components/UpdateProject';
import ToDoItem from './aaaaaaaaa/ToDoItem';
import ToDoList from './aaaaaaaaa/ToDoList';
import Context from './Context';
import AddTodo from './AddTodo';


function App() {

  

  const [todos, setTodos] = React.useState([
      {id: 1, completed: false, title: 'Купить хлеб'},
      {id: 2, completed: false, title: 'Купить масло'},
      {id: 3, completed: false, title: 'Купить молоко'}
  ])



  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id != id))
  }

  function addTodo(title) {
    console.log('addTodo')
    console.log('array length before ' + todos.length)

    setTodos(todos.concat({
        title,
        id:  Date.now(),  
        completed: false

    }))
    console.log('array length after ' + todos.length)
  }


  return(
    <Context.Provider value={{removeTodo: removeTodo}}>

      <AddTodo onCreate = {addTodo}/>
      <div className="App">

        {
          todos.length > 0 ? <ToDoList todos = {todos} onToggle={toggleTodo}/> : <p>no todos</p>
        }

      </div>

    </Context.Provider>
  )


  // return (
  //   <Provider store={store}>
  //     <Router>    
  //       <div className="App">
  //           <Header/>

  //           <Route path="/addProject" component={AddProject}/>
  //           <Route path="/dashboard" component={DashBoard}/>
  //           <Route path="/updateProject/:id" component={UpdateProject}/>

          
  //       </div>
  //     </Router> 
  //     </Provider>
  // );
}

export default App;
