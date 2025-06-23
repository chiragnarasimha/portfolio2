import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/lib/store";

type GuessGameState = {
  userName: string;
  highScore: number;
  userInputDisabled: boolean;
};

const initialState: GuessGameState = {
  highScore: 0,
  userName: "",
  userInputDisabled: false,
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
  },
});

export const selectGuessGameHighScore = (state: RootState) =>
  state.guessGame.highScore;

export const selectGuessGameInputDisabled = (state: RootState) =>
  state.guessGame.userInputDisabled;

export const {
  setGuessGameHighScore,
  setGuessGameUserName,
  disableGuessGameUserNameInput,
} = guessGameSlice.actions;
export default guessGameSlice.reducer;
