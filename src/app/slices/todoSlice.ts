import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IBasicTodo, ITodoState } from '../../interfaces/iTodo';

const initialState: ITodoState = {
    todos: [],
    count: 0,
};

type IUpdateTodoSlice = {
    id: string;
};

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodoSlice: (state, action: PayloadAction<IBasicTodo>) => {
            state.todos.push(action.payload);
        },
        updateTodoDoneSlice: (state, action: PayloadAction<IUpdateTodoSlice>) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id);
            if (todo) {
                todo.done = !todo.done;
            }
        },
        deleteTodoSlice: (state, action) => {
            state.todos.splice(
                state.todos.findIndex((todo) => todo.id === action.payload),
                1
            );
        },
    },
});

export const { addTodoSlice, updateTodoDoneSlice, deleteTodoSlice } = todoSlice.actions;
export default todoSlice.reducer;
