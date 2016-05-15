import {List} from "Immutable";
import {ITask} from "./Itask";

export interface IState {
    nextId: number,
    todos: List<ITask>
}