/// <reference path="../../typings/browser.d.ts" />

import {Observable,Subject} from "@reactivex/Rxjs";
import {intent$} from "../Intents/intent";
import {IAction} from "../Intents/IAction";
import {IState} from "./IState";
import {ITask} from "./Itask";
import {List} from "immutable";
import {Keys} from "../Intents/Keys";
import {Task} from "./Task";

var initialState: IState = {
    nextId: 0,
    todos: List<ITask>()
};

function nextIdReducer(state:number, action:IAction):number {
    switch(action.key) {
        case Keys.add:
            return state + 1;
    }
    return state;
}

function todosReducer(state:List<ITask>,action:IAction):List<ITask> {
    switch(action.key) {
        case Keys.add:
            let todo = <ITask>action.payload;
            return List<ITask>(state.concat(new Task(
                todo.Id,
                todo.Title,
                todo.Description,
                todo.Complete
            )));
        case Keys.complete:
            return List<ITask>(state.map((todo) => {
                if (todo.Id === <number>action.payload) {
                    return new Task(
                        todo.Id,
                        todo.Title,
                        todo.Description,
                        !todo.Complete
                    )
                } else {
                    return todo;
                }
            }));
        case Keys.delete:
            return List<ITask>(state.filter(todo => todo.Id !== <number>action.payload));
    }
    return state;
}

function reducer(state:IState,action:IAction):IState {
    return {
        nextId: nextIdReducer(state.nextId,action),
        todos: todosReducer(state.todos,action)
    }
}

var state$ = <Observable<IState>>intent$.scan(reducer,initialState);

export {
    state$
}