export class ToDo {
    id: number;


    constructor(
        public priority: number,
        public title: string,
        public description: string,
        public completed: boolean = false,
    ) {
        this.id = Date.now();
    }
};

export const defaultToDo: ToDo = {
    id: 0,
    priority: 0,
    title: "",
    description: "",
    completed: false,
};