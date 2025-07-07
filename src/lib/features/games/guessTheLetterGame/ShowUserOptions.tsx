"use client";
import React from "react";
import styles from "./ShowUserOptions.module.css";
import { useAppSelector } from "@/lib/hooks";
import {
  selectGuessGameInputDisabled,
  selectGuessGameUserName,
  selectInstructionsComplete,
} from "./GuessGame.slice";
import clsx from "clsx";

const ShowUserOptions = () => {
  const isInstructionsComplete = useAppSelector(selectInstructionsComplete);

  const name = useAppSelector(selectGuessGameUserName)
    .toLocaleUpperCase()
    .split("");

  if (!useAppSelector(selectGuessGameInputDisabled)) return;

  return (
    <div
      className={clsx(styles.container, {
        [styles.expanded]: isInstructionsComplete,
      })}
    >
      {name.map((text, index) => (
        <span key={index}>
          {index + 1}: {text}
        </span>
      ))}
    </div>
  );
};

export default ShowUserOptions;
