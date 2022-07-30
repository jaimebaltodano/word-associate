import Score from "./Score";
import Questions from "./Questions";
import styles from "./styles.module.css"
const QuestionArea = () => {
  return <div>
    <div className={styles["question-area"]}>
    <Score />
    <Questions />
    </div>
  </div>
}

export default QuestionArea;