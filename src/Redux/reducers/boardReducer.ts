import { createSlice } from "@reduxjs/toolkit";
import { boardModel } from "../types/type";
import words from '../../words.json'

const randomNum = Math.floor( Math.random() * words.words.length);

const initialState: boardModel = {
    board: [
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "", 
    ],
    position: 0,
    row: 0,
    correctWord: words.words[randomNum].toUpperCase()
}

export const boardReducer = createSlice({
    name: 'board',
    initialState,
    reducers: {
        setBoard: (state, action) => {
            state.board = action.payload
        },
        increasePosition: (state) => {
            state.position++
        },
        decreasePosition: (state) => {
            state.position--
        },
        increaseRow: (state) => {
            state.row++;
        },
       
    }
})

export const { setBoard, increasePosition, decreasePosition, increaseRow } = boardReducer.actions;

export default boardReducer.reducer;