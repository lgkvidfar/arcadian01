import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IBasicUser, IUserState, ILoginCredentials, ILoggedUser } from '../../interfaces/iUser';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/users' }),
    tagTypes: ['User'],
    endpoints: (build) => ({
        createOneUser: build.mutation<void, IBasicUser>({
            query: (user) => ({
                url: '/post/one',
                method: 'POST',
                body: user,
            }),
            invalidatesTags: ['User'],
        }),
        loginUser: build.mutation<ILoggedUser, ILoginCredentials>({
            query: (creds) => ({
                url: '/post/login',
                method: 'POST',
                body: creds,
            }),
            invalidatesTags: ['User'],
        }),
        getAllUsers: build.query<IUserState, void>({
            query: () => 'get/all',
            providesTags: ['User'],
        }),
    }),
});

export const { useCreateOneUserMutation, useLoginUserMutation, useGetAllUsersQuery } = userApi;
