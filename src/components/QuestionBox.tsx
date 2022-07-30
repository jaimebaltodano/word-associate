import { FC , useState} from "react";
import QuestionButtons from "./QuestionButtons";
import QuestionOptions from "./QuestionOptions";
import { useAppDispatch } from "../store/hooks";
import { newScore } from "../store/AppSlice";
import styles from "./styles.module.css";
interface BoxState {
  quiz: Array<string>;
  options: Array<string>;
  correct: number;
}
const QuestionBox: FC<BoxState> = ({ quiz, options, correct }) => {
  const [btnDisabled, setBtnDisabled] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const handleClickQuestion = (option: number, answer: number) => {
    if (option === answer) {
      setBtnDisabled(true);
      dispatch(newScore());
    } else {
      setBtnDisabled(false);
    }
  };

  return (
    <div className={styles["question-box"]}>
      <h1>&#10002;</h1>
      {quiz.map((tip, _i) => (
        <QuestionOptions key={`tip-id-${_i}`} tip={tip} />
      ))}
      <div className={styles["question-buttons"]}>
        {options.map((opt, _i) => (
          <QuestionButtons
            key={`button-id=${_i}`}
            index={_i}
            correct={correct}
            label={opt}
            disabled={btnDisabled}
            handleClick={handleClickQuestion}
          />
        ))}{" "}
      </div>
    </div>
  );
};

export default QuestionBox;
