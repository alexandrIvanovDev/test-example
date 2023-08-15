import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {OptionType} from '../../pages/form/Form';

const userDataKeyForLS = 'userData'

export const getUserFromLS = createAsyncThunk('getUserFromLS/user', (_, {dispatch, rejectWithValue}) => {
    try {
        const dataFromLS = localStorage.getItem(userDataKeyForLS)
        if (!dataFromLS) return
        const data = JSON.parse(dataFromLS)
        if (data) {
            dispatch(setUser(data))
        }
    } catch (e) {
        rejectWithValue(e)
    }
})
export const deleteUserFromLS = createAsyncThunk('deleteUserFromLS/user', (_, {dispatch, rejectWithValue}) => {
    try {
        dispatch(clearUserData())
        localStorage.removeItem(userDataKeyForLS)
    } catch (e) {
        rejectWithValue(e)
    }
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
            localStorage.setItem(userDataKeyForLS, JSON.stringify(action.payload))
        },
        clearUserData: (state) => {
            state.user = {name: null, email: null, theme: null}
            state.isLogged = false
        }
    }
})

export const {setUser, clearUserData} = userSlice.actions

export default userSlice.reducer

export type UserType = {
    name: string | null
    email: string | null
    theme: OptionType | null
}

type InitialStateType = {
    user: UserType
    isLogged: boolean
}