import { ToDo } from "../models/ToDo";
import { ToDoItem } from "./ToDoItem";

type ToDoDoneListProps = {
    doneTodos: ToDo[];
    removeDoneToDo: (id: number) => void;
    unMarkAsDone: (id: number) => void;
}

export const ToDoDoneList = ({ doneTodos, removeDoneToDo, unMarkAsDone }: ToDoDoneListProps) => {
    return (
        <div className="todo-done-list flex-1 flex flex-col bg-gray-900/60 rounded-lg p-4 shadow-md border border-gray-700">
            <h2>Done!</h2>
            <div className="todo-done-list-container flex flex-col gap-4 flex-1">
                {doneTodos.length === 0 ? (
                    <p>No done todos yet, add one above!</p>
                ) : (
                    doneTodos.map((todo) => (
                        <ToDoItem
                            key={todo.id}
                            todo={todo}
                            removeDoneToDo={removeDoneToDo}
                            unMarkAsDone={unMarkAsDone}
                            completed={true}
                        />
                    ))
                )}
            </div>
        </div>
    )
};