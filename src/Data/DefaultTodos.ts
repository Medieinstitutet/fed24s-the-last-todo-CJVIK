import { ToDo } from "../models/ToDo";

export const createDefaultTodos = (): ToDo[] => {
    return [
        new ToDo(3, "Complete Todo App", "Finish all required features for the Todo application or atleast try", false),
        new ToDo(2, "Add styling", "Make the app look nice with CSS - or Tailwind?? hmm", false),
        new ToDo(1, "Read React documentation", "Learn more about useEffect and context", false),
    ];
};