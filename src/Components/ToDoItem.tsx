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
        <div className="todo-item">
            <div className="todo-item-content">
                <section className="todo-item-Priority">
                    <p>Priority: {todo.priority === 1 ? "Low" : todo.priority === 2 ? "Medium" : todo.priority === 3 ? "High" : "Unknown Prio"}</p>
                </section>
                <section className="todo-item-Title">
                    <h2>{todo.title}</h2>
                </section>
                <section className="todo-item-Description">
                    <p>{todo.description}</p>
                </section>
                <div className="todo-item-Buttons">
                    <button
                        onClick={handleStatusChange}
                        className={completed ? "undo-btn" : "complete-btn"}
                    >
                        {completed ? "Undo" : "Mark as Done"}
                    </button>
                    <button onClick={handleRemove} className="remove-btn">Remove</button>
                </div>
            </div>
        </div>
    )
}
