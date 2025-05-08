export class ToDo {
    id: number;


    constructor(
        public priority: number,
        public title: string,
        public description: string,
        public completed: boolean = false,
    ) {
        this.id = Date.now() + Math.floor(Math.random() * 1000); // Generera ett unikt ID baserat på tid och slump för att undvika olika ID:n
        // så att vi inte får samma ID när vi skapar en ny ToDo... jätte smart att använda date.now och alla objekt flyttas som done haha när en blev klar pga av samma id.
        //Kanske inte det bästa jag har kommit på haha
    }
};

export const defaultToDo: ToDo = {
    id: 0,
    priority: 0,
    title: "",
    description: "",
    completed: false,
};