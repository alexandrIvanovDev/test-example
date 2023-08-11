import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

const setNewUser = createAsyncThunk('user/setNewUser', () => {

})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {},
        isLogged: false
    } as InitialStateType,
    reducers: {
        setUser: (state, action: PayloadAction<UserType>) => {
            state.user = action.payload
            state.isLogged = true
        }
    }
})

export const {setUser} = userSlice.actions

export default userSlice.reducer

export type UserType = {
    name: string
    email: string
    theme: Theme
}

type InitialStateType = {
    user: UserType
    isLogged: boolean
}

export enum Theme {
    THEME1 = 'theme1',
    THEME2 = 'theme2',
    THEME3 = 'theme3'
}