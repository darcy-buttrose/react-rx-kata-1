import {ITask} from "./ITask";

export class Task implements ITask {
    private Id;
    private Title;
    private Description;
    private Complete;
    constructor(
        id:number,
        title:string,
        description:string,
        complete:boolean
    ) {
        this.Id = id;
        this.Title = title;
        this.Description = description;
        this.Complete = complete;
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