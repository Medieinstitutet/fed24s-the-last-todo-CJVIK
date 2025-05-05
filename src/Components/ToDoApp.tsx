import { ChangeEvent, FormEvent, useState } from "react";
import { ToDo } from "../models/ToDo";
import { AddToDoForm } from "./AddToDoForm";

export const ToDoApp = () => {
    const [toDoList, setToDoList] = useState<ToDo[]>([]);
    const [DoneToDoList, setDoneToDoList] = useState<ToDo[]>([]);


    const addToDo = (toDo: ToDo) => {
        setToDoList([...toDoList, toDo]);
    }
    const removeToDo = (id: number) => {
        const newToDoList = toDoList.filter((toDo) => toDo.id !== id);
        setToDoList(newToDoList);
    }
    const markAsDone = (id: number) => {
        const newToDoList = toDoList.filter((toDo) => toDo.id !== id);
        const doneToDo = toDoList.find((toDo) => toDo.id === id);
        if (doneToDo) {
            setDoneToDoList([...DoneToDoList, doneToDo]);
        }
        setToDoList(newToDoList);
    }
    const unMarkAsDone = (id: number) => {
        const newDoneToDoList = DoneToDoList.filter((toDo) => toDo.id !== id);
        const unDoneToDo = DoneToDoList.find((toDo) => toDo.id === id);
        if (unDoneToDo) {
            setToDoList([...toDoList, unDoneToDo]);
        }
        setDoneToDoList(newDoneToDoList);
    }
    const removeDoneToDo = (id: number) => {
        const newDoneToDoList = DoneToDoList.filter((toDo) => toDo.id !== id);
        setDoneToDoList(newDoneToDoList);
    }


    return (
        <>
            <AddToDoForm />
        </>
    )
}