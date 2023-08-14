import {configureStore} from '@reduxjs/toolkit';
import user from './reducers/user';
import app from './reducers/app';

const rootReducer = {
    user: user,
    app: app
}

export const store = configureStore({
    reducer: rootReducer
})

export type AppStateType = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch