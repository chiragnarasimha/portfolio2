import GameContainer from "@/lib/features/games/components/GameContainer";
import UserNameForm from "@/lib/features/games/guessTheLetterGame/UserNameForm";
import styles from "./GuessGame.module.css";
import ShowUserOptions from "./ShowUserOptions";
import UserAnswer from "./UserAnswer";
import UserInstructions from "./UserInstructions";

const GuessGame = () => {
  return (
    <GameContainer id={"guess-game"}>
      <h1 className={styles.title}>Guess Game</h1>
      <UserNameForm />
      <UserInstructions />
      <ShowUserOptions />
      <UserAnswer />
    </GameContainer>
  );
};
export default GuessGame;
