import React from "react";
import { Task } from "../types/Task";
import TaskItem from "./TaskItem";

type Props = {
  tasks: Task[];
  handleDelete: (task: Task) => void;
};

const TaskList: React.FC<Props> = ({ tasks, handleDelete }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default TaskList;
