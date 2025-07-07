"use client";
import styles from "./UserInstructions.module.css";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  selectGuessGameInputDisabled,
  selectGuessGameUserName,
  setInstructionsComplete,
} from "./GuessGame.slice";
import clsx from "clsx";
import Typewriter from "../components/Typewriter";
import { useEffect } from "react";

const UserInstructions = () => {
  const isInputDisabled = useAppSelector(selectGuessGameInputDisabled);
  const name = useAppSelector(selectGuessGameUserName);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setInstructionsComplete(false));
  }, [dispatch]);

  const fullText = `🎯 Hey ${name}! Ready for the challenge? Let's see if you can crack the code in the fewest guesses possible! 🚀

📝 How to play?
Enter the number associated with the letter you want to guess!`;

  return (
    <div
      className={clsx(styles.container, {
        [styles.collapsed]: !isInputDisabled,
      })}
    >
      <Typewriter
        text={isInputDisabled ? fullText : ""}
        onComplete={() => dispatch(setInstructionsComplete(true))}
      />
    </div>
  );
};

export default UserInstructions;
