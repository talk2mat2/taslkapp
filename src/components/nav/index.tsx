import styles from "./nav.module.css";

const navItems: string[] = ["LoremIpsum", "LoremIpsum", "Lorem"];

const Nav = () => {
  return (
    <nav className={styles.container}>
      <h2 className={styles.header}>Task App</h2>
      <ul className={styles.navList}>
        {navItems.map((item) => (
          <li className={styles.listItem}>{item}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
