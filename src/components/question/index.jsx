import { useDispatch, useSelector } from "react-redux";
import { answerQuestion } from "../../redux/slices/questionnaireSlice";
import styles from "./styles.module.css";

const Question = ({ id }) => {
  const dispatch = useDispatch();
  const question = useSelector((state) =>
    state.questionnaire.questions.find((question) => question.id === id)
  );

  const handleChange = (event) => {
    dispatch(answerQuestion({ id, answer: event.target.value }));
  };

  if (!question) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <p>{question.text}</p>
      {question.options.map((option) => (
        <label key={option} className={styles.option}>
          <input
            className={styles.radioInput}
            type="radio"
            name={`question-${id}`}
            value={option}
            checked={question.selected === option}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default Question;
