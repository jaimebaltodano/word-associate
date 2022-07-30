import { useState } from "react";


interface btnType  {
  option:number;
  correctAnswer: number;
  label: string;
  style: string;
  disabled: boolean;
  handleClick: (option: number, correct: number) => void;
}
const useButton = () => {
  const buttonInput = (props: btnType) => {
    return <input disabled={props.disabled} className={props.style} type="button" onClick={() => props.handleClick(props.option, props.correctAnswer)} value={props.label} />
  }

  return {
    buttonInput
  }
}

export default useButton;