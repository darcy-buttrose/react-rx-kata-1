import {Observable,Subject} from "@reactivex/Rxjs";
import {intent$} from "../Intents/intent";
import {IAction} from "../Intents/IAction";
import {IState} from "./IState";
import {ITask} from "./Itask";
import {List} from "immutable";
import {Keys} from "../Intents/Keys";

var initialState: IState = {
    nextId = 0,
    todos = List<ITask>()
};

function nextIdReducer(state:number, action:IAction) {
    switch(action.key) {
        case Keys.add:
            return state + 1;
    }
    return state;
}

function todoReducer(state:List<ITask>,action):List<ITask> {
    
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