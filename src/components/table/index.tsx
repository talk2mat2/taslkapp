import { useTaskList } from "../../hooks/useTaskList";
import { ITask } from "../../interface";
import TablleBody from "../tablleBody";
import styles from "./table.module.css";

interface props {
  title?: string;
  data?: ITask[];
}
const Table = ({ title = "" }: props) => {
  const { tasksList } = useTaskList();
  return (
    <div className={styles.container}>
      <h4 className={styles.header}>{title}</h4>
      <div>{<TablleBody data={tasksList} />}</div>
    </div>
  );
};

export default Table;
