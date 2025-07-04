"use client";
import React, { useRef } from "react";
import styles from "./GuessGame.module.css";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  disableGuessGameUserNameInput,
  selectGuessGameInputDisabled,
  setGuessGameUserName,
} from "@/lib/features/games/guessTheLetterGame/GuessGame.slice";
import StyledInput from "@/lib/components/StyledInput";
import StyledButton from "@/lib/components/StyledButton";

const triggerValidationFeedback = (
  inputRef: React.RefObject<HTMLInputElement | null>,
  message: string
) => {
  const field = inputRef.current;
  if (field) {
    field.setCustomValidity(message);
    field.reportValidity();
    field.focus();
  }
};

const UserNameForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputDisabled = useAppSelector(selectGuessGameInputDisabled);
  const dispatch = useAppDispatch();

  const submitHandler = () => {
    if (!inputRef.current) return;

    const userInput = inputRef.current.value.trim();
    const nameRegex = /^[A-Za-z]{2,15}$/;

    if (!userInput) {
      triggerValidationFeedback(inputRef, "Please enter your name");
      return;
    }

    if (!nameRegex.test(userInput)) {
      triggerValidationFeedback(
        inputRef,
        "Please enter a valid first name (2-15 letters, no numbers, spaces or special characters)"
      );
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
        label={"Please Enter Name"}
        disabled={inputDisabled}
        ref={inputRef}
        onChange={inputChangeHandler}
      />
      <StyledButton
        variant="primary"
        disabled={inputDisabled}
        className={styles.button}
        type="submit"
      >
        Done
      </StyledButton>
    </form>
  );
};
export default UserNameForm;
