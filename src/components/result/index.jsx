import { useSelector } from "react-redux";
import styles from "./styles.module.css";

const Result = () => {
  const result = useSelector((state) => state.questionnaire.result);

  if (result === null) {
    return null;
  }

  return (
    <div>
      <p className={styles.result}>Your Score: {result}</p>
    </div>
  );
};

export default Result;
