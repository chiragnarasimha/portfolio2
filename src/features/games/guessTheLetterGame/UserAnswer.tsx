"use client";
import StyledButton from "@/lib/components/StyledButton";
import StyledInput from "@/lib/components/StyledInput";
import { useAppSelector } from "@/store/hooks";
import { FormEvent, useEffect, useState } from "react";
import { selectGuessGameState } from "./GuessGame.slice";
import styles from "./UserAnswer.module.css";

const UserAnswer = () => {
  const guessGameState = useAppSelector(selectGuessGameState);
  const { isInstructionsComplete, userName } = guessGameState;
  const length = userName.length;
  const [remainingGuess, setRemainingGuess] = useState(length);
  useEffect(() => {
    setRemainingGuess(length);
  }, [length, userName]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRemainingGuess(remainingGuess - 1);
  };

  if (!isInstructionsComplete) return;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p className={styles.info}>
        <strong>Remaining Guess:</strong> {remainingGuess}
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
