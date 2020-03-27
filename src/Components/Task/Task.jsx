import React from "react";
import "./Task.css";
export default function Task(props) {
  const { title, duration, details, sayHello } = props;

  const renderActions = () => (
    <div className="">
      <a className="task-button" href="#">
        delete
      </a>
      <a className="task-button" href="#">
        update
      </a>
    </div>
  );

  return (
    <div className="task-element">
      <p className="title" onClick={sayHello}>
        {title}
      </p>
      <p>{duration} mn</p>
      {details && (
        <div>
          <p>
            {details.type} - {details.date}
          </p>
        </div>
      )}
      {renderActions()}
    </div>
  );
}
