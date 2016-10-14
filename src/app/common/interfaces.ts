export interface AppState {
    Todos: Todo[],
    VisibilityFilter: any
}

export interface Todo {
    id: number,
    text: string,
    isCompleted: boolean
};

export interface TodoModel {
    filteredTodos: Todo[],
    totalTodos: number,
    completedTodos: number
}
