import { Link } from "react-router-dom";
import Buttons from "../../components/button";
import Nav from "../../components/nav";
import styles from "./homePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.headerSection}>
        <h1>Dynamic and interactive task management application</h1>
        <h3>
          An interactive task management app that help users to manage their
          daily task, Allow users to sort tasks by due date and priority.
        </h3>
      </div>
      <div className={styles.btnSection}>
        <Link to="/dashboard">
          <Buttons title="Get Started" />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
