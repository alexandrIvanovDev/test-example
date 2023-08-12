import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {OptionType} from '../../components/select/Select';

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
    theme: OptionType
}

type InitialStateType = {
    user: UserType
    isLogged: boolean
}