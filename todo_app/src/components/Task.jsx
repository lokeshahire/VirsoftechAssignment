import React from "react";
import "./Task.css";

const Task = ({ task, onRemove }) => {
  return (
    <div className="task">
      <p>{task}</p>
      <button onClick={() => onRemove(task)}>Remove</button>
    </div>
  );
};

export default Task;
