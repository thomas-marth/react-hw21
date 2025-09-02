import "./App.css";
import Question from "./components/question";
import Result from "./components/result";
import { useDispatch, useSelector } from "react-redux";
import { submitAnswers } from "./redux/slices/questionnaireSlice";

function App() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questionnaire.questions);

  const handleSubmit = () => {
    dispatch(submitAnswers());
  };

  return (
    <div className="app">
      <h1 className="title">Questionnaire</h1>
      {questions.map((question) => (
        <Question key={question.id} id={question.id} />
      ))}
      <button className="submit" onClick={handleSubmit}>
        Submit
      </button>
      <Result />
    </div>
  );
}

export default App;
