export type IBasicTodo = {
    id: string;
    _id?: string;
    title: string;
    text: string;
    done: boolean;
    alive: boolean;
};

export type ITodoState = {
    count: number;
    todos: IBasicTodo[];
};
