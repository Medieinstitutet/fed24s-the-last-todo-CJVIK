import { useState } from "react";
import { ToDo } from "../models/ToDo";
import { AddToDoForm } from "./AddToDoForm";
import { ToDoList } from "./ToDoList";
import { ToDoDoneList } from "./ToDoDoneList";
import { createDefaultTodos } from "../Data/DefaultTodos";
import { ToDoSort } from "./ToDoSort";

export const ToDoApp = () => {
    // local storage 
    const getInitialTodos = () => {

        const appInitialized = localStorage.getItem("appInitialized");
        if (appInitialized) {
            const storedTodos = localStorage.getItem("todos");
            if (storedTodos) {
                try {
                    const parsedTodos = JSON.parse(storedTodos);
                    return parsedTodos.map((todo: ToDo) => {
                        const newTodo = new ToDo(todo.priority, todo.title, todo.description, todo.completed);

                        newTodo.id = todo.id; // SPARA IDN
                        return newTodo;
                    });
                } catch (error) {
                    console.error("Error parsing todos from local storage:", error);
                    return [];
                }
            }
            return [];
        }
        else {
            localStorage.setItem("appInitialized", "true");
            const defaultTodos = createDefaultTodos();
            localStorage.setItem("todos", JSON.stringify(defaultTodos));
            return defaultTodos;
        }
    };

    const getInitialDoneTodos = () => {
        const storedDoneTodos = localStorage.getItem("doneTodos");
        if (storedDoneTodos) {
            try {
                const parsedDoneTodos = JSON.parse(storedDoneTodos);
                return parsedDoneTodos.map((todo: ToDo) => {
                    const newTodo = new ToDo(todo.priority, todo.title, todo.description, todo.completed);

                    newTodo.id = todo.id; // SPARA IDN
                    return newTodo;
                });
            } catch (error) {
                console.error("Error parsing done todos from local storage:", error);
                return [];
            }
        }
        return [];
    };

    const [toDoList, setToDoList] = useState<ToDo[]>(getInitialTodos());
    const [DoneToDoList, setDoneToDoList] = useState<ToDo[]>(getInitialDoneTodos());
    const [sortDirection, setSortDirection] = useState<"asc" | "desc" | "none">("none");

    const sortByPriority = () => {
        if (sortDirection === 'none') {
            setSortDirection('desc'); // första click
        } else if (sortDirection === 'desc') {
            setSortDirection('asc'); // andra click
        } else {
            setSortDirection('none'); // tredje click
        }
    };

    // Move this outside of sortByPriority
    const getSortedTodos = () => {
        if (sortDirection === 'none') {
            return toDoList;
        }
        return [...toDoList].sort((a, b) => {
            if (sortDirection === 'asc') {
                return a.priority - b.priority;
            } else {
                return b.priority - a.priority;
            }
        });
    };


    const addToDo = (toDo: ToDo) => {
        setToDoList([...toDoList, toDo]);
        localStorage.setItem('todos', JSON.stringify(toDoList));
    }
    const removeToDo = (id: number) => {
        const newToDoList = toDoList.filter((toDo) => toDo.id !== id);
        setToDoList(newToDoList);
        localStorage.setItem('todos', JSON.stringify(newToDoList));
    }

    const markAsDone = (id: number) => {
        const todoToUpdate = toDoList.find((todo) => todo.id === id);

        if (todoToUpdate) {
            const updatedTodo = { ...todoToUpdate, completed: true };

            setDoneToDoList(prevDoneList => {
                const newDoneList = [...prevDoneList, updatedTodo];
                localStorage.setItem('doneTodos', JSON.stringify(newDoneList));
                return newDoneList;
            });

            setToDoList(prevTodoList => {
                const newTodoList = prevTodoList.filter(todo => todo.id !== id);
                localStorage.setItem('todos', JSON.stringify(newTodoList));
                return newTodoList;
            });
        }
    }
    const unMarkAsDone = (id: number) => {
        const doneTodo = DoneToDoList.find((todo) => todo.id === id);

        if (doneTodo) {
            const updatedTodo = { ...doneTodo, completed: false };

            setToDoList(prevTodoList => {
                const newTodoList = [...prevTodoList, updatedTodo];
                localStorage.setItem('todos', JSON.stringify(newTodoList));
                return newTodoList;
            });

            setDoneToDoList(prevDoneList => {
                const newDoneList = prevDoneList.filter(todo => todo.id !== id);
                localStorage.setItem('doneTodos', JSON.stringify(newDoneList));
                return newDoneList;
            });
        }
    }
    const removeDoneToDo = (id: number) => {
        setDoneToDoList(prevDoneList => {
            const newDoneList = prevDoneList.filter((toDo) => toDo.id !== id);
            localStorage.setItem('doneTodos', JSON.stringify(newDoneList));
            return newDoneList;
        });
    }


    return (
        <>
            <AddToDoForm addToDo={addToDo} />
            <ToDoSort sortByPriority={sortByPriority} currentSortDirection={sortDirection} />
            <section className="todo-lists-container">
                <ToDoList todos={getSortedTodos()} removeToDo={removeToDo} markAsDone={markAsDone} />
                <ToDoDoneList doneTodos={DoneToDoList} removeDoneToDo={removeDoneToDo} unMarkAsDone={unMarkAsDone} />
            </section>
        </>
    )
};
