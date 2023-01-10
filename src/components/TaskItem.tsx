import React from "react";
import { Task } from "../types/Task";

type Props = {
  task: Task;
  handleDelete: (task: Task) => void;
};

const TaskItem: React.FC<Props> = ({ task, handleDelete }) => {
  return (
    <div>
      <p>{task.title}</p>
      <button onClick={() => handleDelete(task)}>削除</button>
    </div>
  );
};

export default TaskItem;
