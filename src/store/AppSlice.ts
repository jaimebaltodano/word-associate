import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "./Index";
interface WordState {
  score: number
}

const initialState: WordState = {
  score:0
}

export const AppSlice = createSlice({
  name: "wordAssociation",
  initialState,
  reducers:{
    newScore:(state) => {
      state.score++
    }
  }
})

export const selectScore = (state:RootState) => state.score;
export const {newScore} = AppSlice.actions;