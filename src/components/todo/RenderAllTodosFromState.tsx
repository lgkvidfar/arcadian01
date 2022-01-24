import React from 'react';
import { useAppSelector } from '../../app/hooks';
import TodoCard from './TodoCard';

const RenderAllTodosFromState = () => {
    const todos = useAppSelector((state) => state.todo.todos);
    return (
        <div>
            {todos.map((todo, index) => {
                return (
                    <TodoCard
                        title={todo.title}
                        text={todo.text}
                        done={todo.done}
                        id={todo.id}
                        alive={todo.alive}
                        key={index}
                    />
                );
            })}
        </div>
    );
};

export default RenderAllTodosFromState;
