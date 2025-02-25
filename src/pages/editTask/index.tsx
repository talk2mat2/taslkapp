import { useState } from "react";
import { ITask } from "../../interface";
import styles from "./addTask.module.css";
import BtnAdd from "../../components/btnAdd";
import { useTaskList } from "../../hooks/useTaskList";
import { useNavigate, useSearchParams } from "react-router-dom";

const EditTask = () => {
  const [searchParams] = useSearchParams();
  const queryId = searchParams.get("id"); //
  const { tasksList } = useTaskList();
  const [task, setTask] = useState<ITask>(() => {
    return (
      tasksList?.find((item) => item?.id === queryId) || {
        title: "",
        description: "",
        dueDate: "",
        priority: "low",
        status: "to-do",
        id: "",
      }
    );
  });
  const { editTask } = useTaskList();
  const navigate = useNavigate();


  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const submitData = (e: React.FormEvent) => {
    e.preventDefault();

    editTask(task);
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Update Task</h1>
      <form className={styles.form} onSubmit={submitData}>
        <input
          className={styles.formInput}
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <textarea
          className={styles.formInput}
          name="description"
          value={task.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <input
          className={styles.formInput}
          type="date"
          name="dueDate"
          value={task.dueDate?.toLocaleString()}
          onChange={handleChange}
          required
        />
        <select
          className={styles.formInput}
          name="priority"
          value={task.priority}
          onChange={handleChange}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <select
          className={styles.formInput}
          name="status"
          value={task.status}
          onChange={handleChange}
        >
          <option value="to-do">To-Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <BtnAdd title="Update" type="submit" />
      </form>
    </div>
  );
};

export default EditTask;
