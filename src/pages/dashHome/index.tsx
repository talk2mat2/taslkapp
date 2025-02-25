import { useNavigate } from "react-router-dom";
import BtnAdd from "../../components/btnAdd";
import Table from "../../components/table";
import styles from "./dashHome.module.css";
const DashHome = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.dashOptions}>
        <h1 className={styles.header}>Task List</h1>
        <BtnAdd onClick={() => navigate("/dashboard/add-task")} title="Add" />
      </div>
      <Table title="list show all task" />
    </div>
  );
};

export default DashHome;
