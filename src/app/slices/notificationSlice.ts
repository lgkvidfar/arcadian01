import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialStateTypes = {
    error: boolean;
    message: string;
};

const initialState: InitialStateTypes = {
    error: false,
    message: '',
};

export const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setNotificationSlice: (state, action: PayloadAction<InitialStateTypes>) => {
            state.message = action.payload.message;
        },
        removeNotificationSlice: (state) => {
            state.message = '';
            state.error = false;
        },
    },
});

export const { setNotificationSlice, removeNotificationSlice } = notificationSlice.actions;
export default notificationSlice.reducer;
