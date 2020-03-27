import React from "react";
import logo from "./logo.svg";
import Hello from "./Components/Hello";
import Input from "./Components/Input/Input";
import Task from "./Components/Task/Task";
import TasksList from "./Components/TasksList/TasksList";
import Axios from "axios";
import "./App.css";

function App() {
  // START testing the api
  const result = Axios.get(
    "https://heroku-boot-todoapp-seif.herokuapp.com/tasks/"
  ).then(res => {
    console.log(res);
  });

  const postRes = Axios.post(
    "https://heroku-boot-todoapp-seif.herokuapp.com/tasks/",
    {
      title: "new fourth task",
      duration: "1h",
      type: "new",
      date: "2020-03-27T11:32:13.442+0000",
      description: "my fourth task"
    }
  ).then(res => {
    console.log(res);
  });
  // END testing the api

  const sayHello = () => alert("Hello from the task component");
  return (
    <div className="App">
      <Input />
      <TasksList />
    </div>
  );
}

export default App;
