export class ToDo {
    id: number;


    constructor(
        public title: string,
        public description: string,
        public completed: boolean = false,
    ) {
        this.id = Date.now();
    }
};
