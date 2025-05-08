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


        const todoToAdd = new ToDo(
            newToDo.priority,
            newToDo.title,
            newToDo.description,
            newToDo.completed
        );

        addToDo(todoToAdd);

        setNewToDo({ ...defaultToDo });
    }



    return (
        <>
            <section className="add-todo-form-container flex flex-col gap-4 min-h-[vh] border border-gray-300 rounded-lg shadow-md bg-gray-800/60 p-4 mb-6">
                <h2 className="text-lg font-semibold mb-2">Add your TODO</h2>
                <form onSubmit={handleSubmit} className="add-todo-form">

                    <div className="form-group flex flex-col items-start gap-1">
                        <label htmlFor="title" className="font-medium">Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={newToDo.title}
                            onChange={handleChange}
                            placeholder="What needs to be done?"
                            required
                            className="w-full rounded border border-gray-400 px-2 py-1 bg-gray-900/80 text-white"
                        />

                    </div>
                    <div className="form-group flex flex-col items-start gap-1">
                        <label htmlFor="description" className="font-medium">Description:</label>
                        <textarea
                            id="description"
                            name="description"
                            value={newToDo.description}
                            onChange={handleChange}
                            placeholder="Add details..."
                            className="w-full rounded border border-gray-400 px-2 py-1 bg-gray-900/80 text-white resize-none"

                        />

                    </div>
                    <div className="form-group flex flex-col items-start gap-1">
                        <label htmlFor="priority" className="font-medium">Priority:</label>
                        <select
                            id="priority"
                            name="priority"
                            value={newToDo.priority}
                            onChange={handleChange}
                            className="rounded border border-gray-400 px-2 py-1 bg-gray-900/80 text-white">

                            <option value="1">Low</option>
                            <option value="2">Medium</option>
                            <option value="3">High</option>
                        </select>
                    </div>
                    <button type="submit" className="add-btn mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded px-4 py-2 shadow">Add ToDo!</button>
                </form>
            </section>
        </>

    )
}