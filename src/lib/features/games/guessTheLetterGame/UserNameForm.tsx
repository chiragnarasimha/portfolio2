"use client";
import React, { useRef } from "react";
import styles from "./GuessGame.module.css";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  disableGuessGameUserNameInput,
  selectGuessGameInputDisabled,
  setGuessGameUserName,
} from "@/lib/features/games/guessTheLetterGame/guessgame.slice";
import StyledInput from "@/lib/components/StyledInput";
import StyledButton from "@/lib/components/StyledButton";

const UserNameForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputDisabled = useAppSelector(selectGuessGameInputDisabled);
  const dispatch = useAppDispatch();

  const submitHandler = () => {
    if (!inputRef.current) return;

    const userInput = inputRef.current.value.trim();
    const nameRegex = /^[A-Za-z]{2,15}$/;

    if (!userInput) {
      inputRef.current.setCustomValidity("Please enter your name");
      inputRef.current.reportValidity();
      return;
    }

    if (!nameRegex.test(userInput)) {
      inputRef.current.setCustomValidity(
        "Please enter a valid first name (2-15 letters, no numbers, spaces or special characters)"
      );
      inputRef.current.reportValidity();
      return;
    }

    dispatch(setGuessGameUserName(userInput));
    dispatch(disableGuessGameUserNameInput(true));
  };
  const inputChangeHandler = () => {
    if (inputRef.current) {
      inputRef.current.setCustomValidity("");
    }
  };

  const handlePointerDownEvents = (
    event: React.PointerEvent<HTMLButtonElement>
  ) => {
    submitHandler();
  };
  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        event.preventDefault();
        submitHandler();
      }}
    >
      <StyledInput
        id={"guess-game-user-name"}
        label={"User Name"}
        disabled={inputDisabled}
        ref={inputRef}
        onChange={inputChangeHandler}
      />
      <StyledButton
        variant="primary"
        disabled={inputDisabled}
        className={styles.button}
        onPointerDown={handlePointerDownEvents}
      >
        Done
      </StyledButton>
    </form>
  );
};
export default UserNameForm;
