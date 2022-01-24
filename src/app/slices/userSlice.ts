import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IBasicUser, IUserState } from '../../interfaces/iUser';

const initialState: IUserState = {
    users: [],
    count: 0,
    current: {
        user: {
            name: '',
            username: '',
            password: '',
            email: '',
            id: '',
            alive: false,
        },
        notification: '',
    },
};

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUserSlice: (state, action: PayloadAction<IBasicUser>) => {
            state.users.push(action.payload);
        },
        updateUserUsernameSlice: (state, action: PayloadAction<IBasicUser>) => {
            state.users = state.users.map((user) =>
                user.id !== action.payload.id ? user : action.payload
            );
        },
        deleteUserSlice: (state, action) => {
            state.users.splice(
                state.users.findIndex((user) => user.id === action.payload),
                1
            );
        },
        setCurrentUserSlice: (state, action: PayloadAction<IBasicUser>) => {
            if (action.payload && state.current) {
                state.current.user = action.payload;
            }
        },
        removeCurrentUserSlice: (state) => {
            if (state.current && state.current.user.alive) {
                state.current = initialState.current;
            }
        },
    },
});

export const {
    addUserSlice,
    updateUserUsernameSlice,
    deleteUserSlice,
    setCurrentUserSlice,
    removeCurrentUserSlice,
} = userSlice.actions;
export default userSlice.reducer;
