import {FC} from "react";
import useButton from "../hooks/useButton";
import styles from "./styles.module.css";

interface ButtonsOptions {
  index: number,
  correct: number,
  label: string,
  disabled: boolean,
  handleClick: (opt: number, answ: number) => void
}
const QuestionButtons: FC<ButtonsOptions> = ({index, correct, label, disabled, handleClick}) => {
  const { buttonInput } = useButton();

  return (
    <div>
      {buttonInput({
        option: index + 1,
        correctAnswer: correct,
        label: label,
        style: styles["question-button"],
        disabled: disabled,
        handleClick: handleClick,
      })}
    </div>
  );
};

export default QuestionButtons;
