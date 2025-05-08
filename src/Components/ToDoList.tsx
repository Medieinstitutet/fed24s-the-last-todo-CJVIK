import { ToDo } from "../models/ToDo";
import { ToDoItem } from "./ToDoItem";

type ToDoListProps = {
    todos: ToDo[];
    removeToDo: (id: number) => void;
    markAsDone: (id: number) => void;
}

export const ToDoList = ({ todos, removeToDo, markAsDone }: ToDoListProps) => {
    return (
        <div className="todo-list flex-1 flex flex-col bg-gray-900/60 rounded-lg p-4 shadow-md border border-gray-700">
            <h2>To Do List!</h2>
            <div className="todo-list-container flex flex-col gap-4 flex-1">
                {todos.length === 0 ? (
                    <p>No todos yet, add one above!</p>
                ) : (
                    todos.map((todo) => (
                        <ToDoItem
                            key={todo.id}
                            todo={todo}
                            removeToDo={removeToDo}
                            markAsDone={markAsDone}
                            completed={false}
                        />
                    ))
                )}
            </div>
        </div>
    )
};