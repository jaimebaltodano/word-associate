import { questions } from "../mock/questions";
import QuestionBox from "./QuestionBox";
import styles from "./styles.module.css";
const Questions = () => {
  return (
    <div className={styles["question-display"]} id="questions">
      {questions.map((question, i) => (
        <QuestionBox key={`question-id-${i}`}
          options={question.options}
          quiz={question.quiz}
          correct={question.correct}
        />
      ))}
    </div>
  );
};

export default Questions;
