import { useContext } from "react";
import { taskListContext } from "../context/context";

export const useTaskList = () => {
  const context = useContext(taskListContext);

  if (!context) {
    throw new Error("Provide error");
  }

  const { addTask, deleteTask, editTask, tasksList } = context;
  return { addTask, deleteTask, editTask, tasksList };
};
