import styles from "./curcle.module.css";
interface props {
  bg: string;
}
const Circle = ({ bg = "" }: props) => {
  return <div className={`${styles.container} ${styles[bg] || ""}`}></div>;
};

export default Circle;
