import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query/react';

import todoReducer from './slices/todoSlice';
import userReducer from './slices/userSlice';
import notificationReducer from './slices/notificationSlice';
import { userApi } from './apis/userApi';

export const store = configureStore({
    reducer: {
        user: userReducer,
        [userApi.reducerPath]: userApi.reducer,
        todo: todoReducer,
        notification: notificationReducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
