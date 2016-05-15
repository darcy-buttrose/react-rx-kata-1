import {ITask} from "./ITask";

export class Task implements ITask {
    private id;
    private title;
    private description;
    private complete;
    constructor(
        id:number,
        title:string,
        description:string,
        complete:boolean
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.complete = complete;
    }
    get Id() {
        return this.Id;
    }
    get Title() {
        return this.Title;
    }
    get Description() {
        return this.Description;
    }
    get Complete() {
        return this.Complete;
    }
}