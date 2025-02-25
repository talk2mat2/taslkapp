import { ITask } from "../../interface";
import Circle from "../circle";
import styles from "./tablleBody.module.css";
import React, { useEffect, useState } from "react";
import Delete from "../../assets/trash.png";
import Edit from "../../assets/pencil.png";
import { useTaskList } from "../../hooks/useTaskList";
import { useNavigate } from "react-router-dom";

interface Props {
  data: ITask[];
}

const Table: React.FC<Props> = ({ data }) => {
  const { deleteTask } = useTaskList();
  const [toShow, setToShow] = useState(data);
  const navigate = useNavigate();
  const [filter, setFilter] = useState<Partial<ITask>>({
    status: undefined,
    priority: undefined,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setToShow(
      data.filter((item) =>
        Object.entries(filter).every(
          ([key, value]) => !value || item[key as keyof ITask] === value
        )
      )
    );
  }, [filter, data]);

  return (
    <div className={styles.tableWrapper}>
      <div className={styles.filterRow}>
        <div>
          <p>Status</p>
          <form>
            <select
              className={styles.formInput}
              name="status"
              value={filter.status}
              onChange={handleChange}
            >
              <option value="">None</option>
              <option value="to-do">To-Do</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </form>
        </div>
        <div>
          <p>Priority</p>
          <form>
            <select
              className={styles.formInput}
              name="priority"
              value={filter.priority}
              onChange={handleChange}
            >
              <option value="">--</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </form>
        </div>
      </div>
      {!toShow?.length ? (
        <p>no data yet</p>
      ) : (
        <table className={styles.responsiveTable}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Due Date</th>
              <th>Priority</th>
              <th>Status</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {toShow.map((item, index) => (
              <>
                <tr key={index}>
                  <td
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <div className={styles.dot}>
                      <Circle bg="orange" />
                    </div>
                    {item.title}
                  </td>
                  <td>{item.description}</td>
                  <td>{item.dueDate}</td>
                  <td>{item.priority}</td>
                  <td>{item.status}</td>
                  <td>
                    <button
                      onClick={() => deleteTask(item?.id)}
                      className={styles.iconBtn}
                    >
                      <img
                        className={styles.icon}
                        src={Delete}
                        alt="delete Icon"
                      />
                    </button>
                    <button
                      onClick={() =>
                        navigate("/dashboard/edit-task?id=" + item?.id)
                      }
                      className={styles.iconBtn}
                    >
                      <img
                        className={styles.icon2}
                        src={Edit}
                        alt="delete Icon"
                      />
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
