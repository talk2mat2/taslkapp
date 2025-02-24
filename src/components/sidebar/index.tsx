import { Link } from "react-router-dom";
import styles from "./sidebar.module.css";
const liosItems: string[] = [
  "LoremIpsum",
  "LoremIpsum",
  "Lorem",
  "LoremIpsum",
  "LoremIpsum",
  "Lorem",
];
const Sidebar = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        {" "}
        <h2 className={styles.header}>Task App</h2>
      </Link>
      <ul>
        {liosItems.map((item) => (
          <li className={styles.sibeBarItem}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;
