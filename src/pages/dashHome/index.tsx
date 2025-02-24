import BtnAdd from "../../components/btnAdd";
import Table from "../../components/table";
import styles from "./dashHome.module.css";
const DashHome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.dashOptions}>
        <h1 className={styles.header}>Task List</h1>
        <BtnAdd  title="Add"/>
      </div>
      <Table title="list show all task" />
    </div>
  );
};

export default DashHome;
