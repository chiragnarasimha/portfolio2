"use client";
import styles from "./UserInstructions.module.css";
import { useAppSelector } from "@/lib/hooks";
import {
  selectGuessGameInputDisabled,
  selectGuessGameUserName,
} from "./GuessGame.slice";
import clsx from "clsx";
import Typewriter from "../components/Typewriter";

const UserInstructions = () => {
  const isInputDisabled = useAppSelector(selectGuessGameInputDisabled);
  const name = useAppSelector(selectGuessGameUserName);

  // Memoize the full text to avoid recreation on every render
  const fullText = `🎯 Hey ${name}! Ready for the challenge? Let's see if you can crack the code in the fewest guesses possible! 🚀

📝 How to play?
Enter the number associated with the letter you want to guess!`;

  return (
    <div
      className={clsx(styles.container, {
        [styles.collapsed]: !isInputDisabled,
      })}
    >
      <Typewriter text={fullText} />
    </div>
  );
};

export default UserInstructions;
