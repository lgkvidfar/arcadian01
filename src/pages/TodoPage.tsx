import React from 'react';

import NewTodoInput from '../components/todo/NewTodoInput';
import RenderAllTodosFromState from '../components/todo/RenderAllTodosFromState';
// import RenderAllTodosFromApi from "../components/todo/RenderAllTodosFromApi";

const TodoPage = () => {
    return (
        <div>
            <NewTodoInput />
            <RenderAllTodosFromState />
            {/* <RenderAllTodosFromApi /> */}
        </div>
    );
};

export default TodoPage;
