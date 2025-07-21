"use client";
import StyledButton from "@/lib/components/StyledButton";
import StyledInput from "@/lib/components/StyledInput";
import { useAppSelector } from "@/lib/hooks";
import { FormEvent, useEffect, useState } from "react";
import { selectGuessGameState } from "./GuessGame.slice";
import styles from "./UserAnswer.module.css";

const UserAnswer = () => {
  const guessGameState = useAppSelector(selectGuessGameState);
  const { isInstructionsComplete, correctGuess, userName } = guessGameState;
  const [score, setScore] = useState(length);
  useEffect(() => {
    setScore(userName.length);
  }, [userName]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setScore(score - 1);
  };

  console.table({ correctGuess, userName });

  if (!isInstructionsComplete) return;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p className={styles.info}>
        <strong>Score:</strong> {score}
      </p>
      <StyledInput
        type="number"
        id={"user-answer"}
        label={"Whats your guess?"}
        inputMode="numeric"
      />
      <StyledButton variant={"primary"} type="submit">
        Submit
      </StyledButton>
    </form>
  );
};

export default UserAnswer;
