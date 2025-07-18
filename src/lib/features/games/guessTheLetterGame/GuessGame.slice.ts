import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/lib/store";

type GuessGameState = {
  userName: string;
  highScore: number;
  userInputDisabled: boolean;
  instructionsComplete: boolean;
};

const initialState: GuessGameState = {
  highScore: 0,
  userName: "",
  userInputDisabled: false,
  instructionsComplete: false,
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
    },
    disableGuessGameUserNameInput(state, action: PayloadAction<boolean>) {
      state.userInputDisabled = action.payload;
    },
    setInstructionsComplete(state, action: PayloadAction<boolean>) {
      state.instructionsComplete = action.payload;
    },
  },
});

export const selectGuessGameHighScore = (state: RootState) =>
  state.guessGame.highScore;

export const selectGuessGameInputDisabled = (state: RootState) =>
  state.guessGame.userInputDisabled;

export const selectGuessGameUserName = (state: RootState) =>
  state.guessGame.userName;

export const selectInstructionsComplete = (state: RootState) =>
  state.guessGame.instructionsComplete;

export const {
  setGuessGameHighScore,
  setGuessGameUserName,
  disableGuessGameUserNameInput,
  setInstructionsComplete,
} = guessGameSlice.actions;
export default guessGameSlice.reducer;
