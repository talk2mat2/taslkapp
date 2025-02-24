import styles from "./layoutNav.module.css";

// const navItems: string[] = ["LoremIpsum", "LoremIpsum", "Lorem"];

const LayoutNav = () => {
  return (
    <nav className={styles.container}>
      <h2 className={styles.header}>Task App</h2>
      <ul className={styles.navList}></ul>
    </nav>
  );
};

export default LayoutNav;
