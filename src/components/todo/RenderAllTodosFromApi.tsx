import React from 'react';
import { useAppSelector } from '../../app/hooks';
import TodoCard from './TodoCard';

const TodoList = () => {
    // Using a query hook automatically fetches data and returns query values
    //   const { data, error, isLoading } = useGetAllTodosQuery();
    // Individual hooks are also accessible under the generated endpoints:
    // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')
    // render UI based on data and loading state
    //   if(error){
    //     console.log('logging data if error in todolist: ', data)
    //     return <div>there was an error with fetching the list of todos</div>
    //   } else if(isLoading) {
    //     console.log('logging data if loading in todolist: ',data)
    //     return <div>loading....</div>
    //   } else if(data){
    //     // currentTodos = currentTodos.concat(data.todos)
    //     console.log('logging data if data in todolist: ',data)
    //     return (
    //       <div>
    //        {/* this data is from the todoApi fetching todos from */}
    //         <h3>{data.todos.map((todo, index) => {
    //           console.log('rendering todo from todoApi',todo)
    //           return (
    //   <TodoCard title={todo.title} text={todo.text} id={todo.id} done={todo.done} alive={todo.alive} key={index}/>
    //           )
    //         })}</h3>
    //       </div>
    //     )
    //   } else {
    //     return null
    //   }
};

export default TodoList;
