import {configureStore} from '@reduxjs/toolkit'
import boardReducer from './reducers/boardReducer'
export const store = configureStore({
    reducer: {
        boardReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
