"use client";
import { useAppSelector } from "@/store/hooks";
import clsx from "clsx";
import { selectGuessGameState } from "./GuessGame.slice";
import styles from "./ShowUserOptions.module.css";

const ShowUserOptions = () => {
  const guessGameState = useAppSelector(selectGuessGameState);
  const { isInstructionsComplete, userName, isUserNameInputDisabled } =
    guessGameState;

  if (!isUserNameInputDisabled) return;

  return (
    <div
      className={clsx(styles.container, {
        [styles.expanded]: isInstructionsComplete,
      })}
    >
      {userName
        .toLocaleUpperCase()
        .split("")
        .map((char, index) => (
          <span key={`${index} ${char}`}>
            {index + 1}: {char}
          </span>
        ))}
    </div>
  );
};

export default ShowUserOptions;
