import styles from "./btnAdd.module.css";

interface Props {
  title?: string;
  type?: "submit" | "reset" | "button"; 
  onClick?: () => void;
}

const BtnAdd = ({ title = "", onClick, type = "button" }: Props) => {
  return (
    <button type={type} onClick={onClick} className={styles.container}>
      {title}
    </button>
  );
};

export default BtnAdd;
