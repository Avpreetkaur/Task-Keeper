import { useState } from "react";
import "./App.css";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;
    setTasks([{ text: task, completed: false }, ...tasks]);
    setTask("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <div className="card">
        <h1>TaskFlow</h1>
        <p className="subtitle">Stay organised. Stay productive.</p>

        <div className="input-row">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="What do you need to do?"
          />
          <button onClick={addTask}>Add</button>
        </div>

        <ul className="task-list">
          {tasks.length === 0 && (
            <p className="empty">No tasks yet 🌱</p>
          )}

          {tasks.map((t, index) => (
            <li
              key={index}
              className={`task ${t.completed ? "completed" : ""}`}
            >
              <span onClick={() => toggleTask(index)}>
                {t.text}
              </span>
              <button onClick={() => deleteTask(index)}>✕</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
