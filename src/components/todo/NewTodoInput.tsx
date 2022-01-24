import React, { ChangeEvent, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useAppDispatch } from '../../app/hooks';
import { addTodoSlice } from '../../app/slices/todoSlice';

const NewTodoInput = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const updateTodoTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const updateTodoText = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    };

    const dispatch = useAppDispatch();

    const onAddTodoClick = () => {
        const todo = { title, text, id: uuid(), done: false, alive: true };
        console.log(
            'this todo is ready for being sent to the backend for parsing and saving and then added to list via frontend',
            todo
        );
        dispatch(addTodoSlice(todo));
        setTitle('');
        setText('');
    };

    return (
        <div>
            <div>
                <hr />
                <input
                    onChange={updateTodoTitle}
                    value={title}
                    type="text"
                    name="title"
                    placeholder="title"
                />{' '}
                <br />
                <textarea
                    onChange={updateTodoText}
                    value={text}
                    name="text"
                    placeholder="text"
                />{' '}
                <br />
                <button onClick={onAddTodoClick}>add todo</button>
            </div>
            <hr />
        </div>
    );
};

export default NewTodoInput;
