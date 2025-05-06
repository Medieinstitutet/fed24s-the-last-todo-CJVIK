import { ChangeEvent, FormEvent, useState } from "react"
import { ToDo, defaultToDo } from "../models/ToDo"

type AddToDoFormProps = {
    addToDo: (toDo: ToDo) => void;
}

export const AddToDoForm = ({ addToDo }: AddToDoFormProps) => {

    const [newToDo, setNewToDo] = useState<ToDo>({ ...defaultToDo });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {

        if (e.target.name === "title") {
            setNewToDo({ ...newToDo, title: e.target.value });
        }
        if (e.target.name === "description") {
            setNewToDo({ ...newToDo, description: e.target.value });
        }
        if (e.target.name === "priority") {
            setNewToDo({ ...newToDo, priority: parseInt(e.target.value) });
        }
    };
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (newToDo.title.trim() === "") {
            alert("Please enter a title for your TODO.");
            return;
        }
        addToDo(newToDo);
        setNewToDo({ ...defaultToDo });
        console.log(newToDo);

    }



    return (
        <>
            <section className="add-todo-form-container">
                <h2>Add your TODO</h2>
                <form onSubmit={handleSubmit} className="add-todo-form">

                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={newToDo.title}
                            onChange={handleChange}
                            placeholder="What needs to be done?"
                            required
                        />

                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            name="description"
                            value={newToDo.description}
                            onChange={handleChange}
                            placeholder="Add details..."
                        />

                    </div>
                    <div className="form-group">
                        <label htmlFor="priority">Priority:</label>
                        <select
                            id="priority"
                            name="priority"
                            value={newToDo.priority}
                            onChange={handleChange}>
                            <option value="1">Low</option>
                            <option value="2">Medium</option>
                            <option value="3">High</option>
                        </select>
                    </div>
                    <button type="submit" className="add-btn">Add ToDo!</button>
                </form>
            </section>
        </>

    )
}