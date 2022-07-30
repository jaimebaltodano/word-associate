import {selectScore} from "../store/AppSlice";
import { useAppSelector } from "../store/hooks";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";


const Score = () => {
  const appscore = useAppSelector(selectScore)
  const [myScore, setMyScore] = useState(0)

  useEffect(() => {
    setMyScore(appscore)
  },[appscore])

  return (<div>
    <h1>Welcome to Word Association</h1>
    <h3>Your score is <span className={styles["score-display"]}>{myScore}</span> </h3>
    </div>)
}

export default Score;