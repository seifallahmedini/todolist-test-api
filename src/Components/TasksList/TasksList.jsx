import React from "react";
import Task from "../Task/Task";

export default function TasksList() {
  const tasks = [
    { title: "Learn Html", duration: 60, date: "2020-03-06" },
    { title: "Learn React", duration: 60, date: "2020-03-06" },
    { title: "Learn Node", duration: 60, date: "2020-03-06" }
  ];
  return (
    <div>
      {tasks.map(task => (
        <Task title={task.title} duration={task.duration} date={task.date} />
      ))}
    </div>
  );
}
