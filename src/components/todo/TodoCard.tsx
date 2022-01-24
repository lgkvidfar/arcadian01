import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { deleteTodoSlice, updateTodoDoneSlice } from '../../app/slices/todoSlice';

import { IBasicTodo } from '../../interfaces/iTodo';

const TodoCard = ({ title, text, done, id, alive }: IBasicTodo) => {
    const dispatch = useAppDispatch();

    const handleUpdateTodoDone = () => {
        const todo = { title, text, done, id, alive };
        dispatch(updateTodoDoneSlice(todo));
    };

    const handleDeleteTodo = () => {
        dispatch(deleteTodoSlice(id));
    };

    return (
        <div>
            <span>{id} </span>
            <h2>{title} </h2>
            <h4>
                status | finished: {String(done)}
                <button onClick={handleUpdateTodoDone}>update</button>
            </h4>
            <p>{text}</p>
            <h4>
                status | alive: {String(alive)}
                <button onClick={handleDeleteTodo}>kill</button>
            </h4>
            <hr />
        </div>
    );
};

export default TodoCard;
