import React from "react";

import styles from "./GuessGame.module.css";
import UserNameForm from "@/lib/features/games/guessTheLetterGame/UserNameForm";
import GameContainer from "@/lib/features/games/components/GameContainer";

const GuessGame = () => {
  return (
    <GameContainer id={"guess-game"}>
      <h1 className={styles.title}>Guess Game</h1>
      <UserNameForm />
    </GameContainer>
  );
};
export default GuessGame;
