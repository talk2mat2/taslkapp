import styles from "./btnAdd.module.css"
interface props {
  title?: string;
}
const BtnAdd = ({ title = "" }: props) => {
  return <button className={styles.container}>{title}</button>;
};

export default BtnAdd;
