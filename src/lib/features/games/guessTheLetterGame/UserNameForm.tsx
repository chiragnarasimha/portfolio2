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
import clsx from "clsx";

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
  const isInputDisabled = useAppSelector(selectGuessGameInputDisabled);
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
      className={clsx(styles.form)}
      onSubmit={(event) => {
        event.preventDefault();
        submitHandler();
      }}
    >
      <StyledInput
        id={"guess-game-user-name"}
        label={"Please Enter Name"}
        disabled={isInputDisabled}
        ref={inputRef}
        onChange={inputChangeHandler}
        className={styles.input}
      />
      <StyledButton
        variant="primary"
        disabled={isInputDisabled}
        className={styles.button}
        type="submit"
      >
        Done
      </StyledButton>
      <StyledButton
        variant="cancel"
        className={styles.button}
        type="button"
        onPointerDown={() => {
          dispatch(setGuessGameUserName(""));
          dispatch(disableGuessGameUserNameInput(false));
          if (inputRef.current) inputRef.current.value = "";
        }}
      >
        Clear
      </StyledButton>
    </form>
  );
};
export default UserNameForm;
