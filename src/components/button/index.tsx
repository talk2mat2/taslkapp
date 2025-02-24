import styles from "./button.module.css"
interface props {
  title?: string;
}
const Buttons = ({ title = "" }: props) => {
  return <button className={styles.container}>{title}</button>;
};

export default Buttons;
