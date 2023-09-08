import React, { useState } from "react";
import Task from "./Task";
import "./Task.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  const handleAddTask = () => {
    if (taskText.trim() !== "") {
      setTasks([...tasks, taskText]);
      setTaskText("");
    }
  };

  const handleRemoveTask = (taskToRemove) => {
    const updatedTasks = tasks.filter((task) => task !== taskToRemove);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <div className="tasks">
        {tasks.length === 0 ? (
          <p>No tasks added yet!</p>
        ) : (
          tasks.map((task, index) => (
            <Task key={index} task={task} onRemove={handleRemoveTask} />
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList;
