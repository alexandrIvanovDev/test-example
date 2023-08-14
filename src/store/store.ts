import {configureStore} from '@reduxjs/toolkit';
import user from './reducers/user';

const rootReducer = {
    user: user,
}

export const store = configureStore({
    reducer: rootReducer
})

export type AppStateType = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch