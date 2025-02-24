import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";

import styles from "./layout.module.css";
import LayoutNav from "../layoutNav";

const Layout = () => {
  return (
    <div className={styles.container}>
      <Sidebar />{" "}
      <div className={styles.Outlet}>
        <LayoutNav />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
