import { ToDo } from "../models/ToDo"

type ToDoItemProps = {
    todo: ToDo;
    removeDoneToDo?: (id: number) => void;
    unMarkAsDone?: (id: number) => void;
    removeToDo?: (id: number) => void;
    markAsDone?: (id: number) => void;
    completed: boolean;
}

export const ToDoItem = ({ todo, removeToDo, markAsDone, removeDoneToDo, unMarkAsDone, completed }: ToDoItemProps) => {

    const handleRemove = () => {
        if (completed && removeDoneToDo) {
            removeDoneToDo(todo.id);
        } else if (!completed && removeToDo) {
            removeToDo(todo.id);
        }
    };

    const handleStatusChange = () => {
        if (completed && unMarkAsDone) {
            unMarkAsDone(todo.id);
        } else if (!completed && markAsDone) {
            markAsDone(todo.id);
        }
    };

    return (
        <div className="todo-item border border-gray-500 rounded-lg shadow-sm bg-gray-800/70 mb-2">
            <div className="todo-item-content flex flex-col gap-2 p-4">
                <section className="todo-item-Priority">
                    <p className="text-sm text-gray-300">Priority: <span className={
                        todo.priority === 1 ? "text-green-400" :
                            todo.priority === 2 ? "text-yellow-400" :
                                todo.priority === 3 ? "text-red-400" : "text-gray-400"}> {todo.priority === 1 ? "Low" : todo.priority === 2 ? "Medium" : todo.priority === 3 ? "High" : "Unknown Prio"}</span></p>
                </section>
                <section className="todo-item-Title mb-1">
                    <h2 className="text-lg font-semibold">{todo.title}</h2>
                </section>
                <section className="todo-item-Description mb-2">
                    <p className="text-gray-200">{todo.description}</p>
                </section>
                <div className="todo-item-Buttons flex gap-2 mt-2">
                    <button
                        onClick={handleStatusChange}
                        className={completed ? "undo-btn px-3 py-1 rounded bg-yellow-500 hover:bg-yellow-600 text-white font-semibold shadow transition"
                            : "complete-btn complete-btn px-3 py-1 rounded bg-green-600 hover:bg-green-700 text-white font-semibold shadow transition"}
                    >
                        {completed ? "Undo" : "Mark as Done"}
                    </button>
                    <button onClick={handleRemove} className="remove-btn px-3 py-1 rounded bg-red-600 hover:bg-red-700 text-white font-semibold shadow transition">Remove</button>
                </div>
            </div>
        </div>
    )
}
