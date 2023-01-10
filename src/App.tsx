import React, { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskLIst";
import { Task } from "./types/Task";

const initialState: Task[] = [
  {
    id: "1",
    title: "first task",
  },
  {
    id: "2",
    title: "second task",
  },
];

const App: React.FC = () => {
  const [tasks, setTasks] = useState(initialState);

  const handleDelete = (task: Task) => {
    const newTasks = tasks.filter((t) => t.id !== task.id);
    setTasks(newTasks);
  };

  return <TaskList tasks={tasks} handleDelete={handleDelete} />;
};

export default App;
