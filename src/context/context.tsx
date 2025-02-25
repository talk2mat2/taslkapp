import { Children, createContext, ReactNode, useEffect, useState } from "react";
import { ITask } from "../interface";

export interface ITaskContext {
  tasksList: ITask[];
  addTask: (payload: ITask) => void;
  deleteTask: (id: string) => void;
  editTask: (payload: ITask) => void;
}

export const taskListContext = createContext<ITaskContext | undefined>(
  undefined
);
interface props {
  children: ReactNode;
}
export const TaskListProvider = ({ children }: props) => {
  const loadTask = localStorage.getItem("tasks");
  let parsed = [];
  if (loadTask) {
    parsed = JSON.parse(loadTask) || [];
  }
  const [tasksList, setTasList] = useState<ITask[] | []>(parsed);

  const addTask = (payload: ITask) => {
    setTasList([...tasksList, payload]);
  };
  const deleteTask = (id: string) => {
    const update = tasksList.filter((item) => item.id !== id);
    setTasList(update);
  };
  const editTask = (payload: ITask) => {
    const update = tasksList.map((task: ITask) =>
      task.id === payload.id ? payload : task
    );
    setTasList(update);
  };
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksList));
  }, [tasksList]);
  return (
    <taskListContext.Provider
      value={{ addTask, deleteTask, editTask, tasksList }}
    >
      {children}
    </taskListContext.Provider>
  );
};
