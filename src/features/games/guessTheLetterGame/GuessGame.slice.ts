import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/lib/store";

type GuessGameState = {
  userName: string;
  highScore: number;
  isUserNameInputDisabled: boolean;
  isInstructionsComplete: boolean;
  correctGuess: number;
};

const initialState: GuessGameState = {
  highScore: 0,
  userName: "",
  isUserNameInputDisabled: false,
  isInstructionsComplete: false,
  correctGuess: 0,
};

const guessGameSlice = createSlice({
  name: "guessGame",
  initialState,
  reducers: {
    setGuessGameHighScore(state, action: PayloadAction<number>) {
      state.highScore = action.payload;
    },
    setGuessGameUserName(state, action: PayloadAction<string>) {
      state.userName = action.payload;
      state.correctGuess =
        Math.floor(Math.random() * action.payload.length) + 1;
    },
    disableGuessGameUserNameInput(state, action: PayloadAction<boolean>) {
      state.isUserNameInputDisabled = action.payload;
    },
    setInstructionsComplete(state, action: PayloadAction<boolean>) {
      state.isInstructionsComplete = action.payload;
    },
  },
});

export const selectGuessGameState = (state: RootState): GuessGameState =>
  state.guessGame;
export const selectGuessGameInputDisabled = (state: RootState): boolean =>
  state.guessGame.isUserNameInputDisabled;
export const selectGuessGameUserName = (state: RootState): string =>
  state.guessGame.userName;

export const {
  setGuessGameHighScore,
  setGuessGameUserName,
  disableGuessGameUserNameInput,
  setInstructionsComplete,
} = guessGameSlice.actions;
export default guessGameSlice.reducer;
