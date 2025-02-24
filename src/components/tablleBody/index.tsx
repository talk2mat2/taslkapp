import { ITask } from "../../interface";
import Circle from "../circle";
import styles from "./tablleBody.module.css";
import React from "react";
import Delete from "../../assets/trash.png";
import Edit from "../../assets/pencil.png";

interface Props {
  data: ITask[];
}

const Table: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.tableWrapper}>
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
          {data.map((item, index) => (
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
                <td>{item.dueDate?.toDateString()}</td>
                <td>{item.priority}</td>
                <td>{item.status}</td>
                <td>
                  <button className={styles.iconBtn}>
                    <img
                      className={styles.icon}
                      src={Delete}
                      alt="delete Icon"
                    />
                  </button>
                  <button className={styles.iconBtn}>
                    <img className={styles.icon2} src={Edit} alt="delete Icon" />
                  </button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
