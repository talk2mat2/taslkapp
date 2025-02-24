import { ITask } from "../../interface";
import { mockTasks } from "../../mockData";
import TablleBody from "../tablleBody";
import styles from "./table.module.css";

interface props {
  title?: string;
  data?: ITask[];
}
const Table = ({ title = ""}: props) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.header}>{title}</h4>
      <div>{<TablleBody data={mockTasks} />}</div>
    </div>
  );
};

export default Table;
