import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [
    {
      id: 1,
      text: "Какой хук используется для управления состоянием в функциональных компонентах?",
      options: ["useState", "useEffect"],
      correct: "useState",
      selected: null,
    },
    {
      id: 2,
      text: "Что делает useEffect с пустым массивом зависимостей []?",
      options: [
        "Выполняется один раз при монтировании",
        "Запускается при каждом рендере",
      ],
      correct: "Выполняется один раз при монтировании",
      selected: null,
    },
    {
      id: 3,
      text: "Для чего используется useRef?",
      options: [
        "Для хранения изменяемого значения, которое не вызывает повторный рендер",
        "Для отслеживания состояния компонента",
      ],
      correct:
        "Для хранения изменяемого значения, которое не вызывает повторный рендер",
      selected: null,
    },
    {
      id: 4,
      text: "Как правильно передать данные от родительского компонента к дочернему?",
      options: ["Через props", "Через useState в дочернем"],
      correct: "Через props",
      selected: null,
    },
    {
      id: 5,
      text: "Какой метод используется для рендеринга React-приложения в DOM?",
      options: ["ReactDOM.createRoot(...).render(...)", "renderDOM()"],
      correct: "ReactDOM.createRoot(...).render(...)",
      selected: null,
    },
  ],
  result: null,
};

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      const { id, answer } = action.payload;
      const question = state.questions.find((question) => question.id === id);
      if (question) {
        question.selected = answer;
      }
    },

    submitAnswers: (state) => {
      let score = 0;
      state.questions.forEach((question) => {
        if (question.selected === question.correct) score += 1;
      });
      state.result = score;
    },
  },
});

export const { answerQuestion, submitAnswers } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
