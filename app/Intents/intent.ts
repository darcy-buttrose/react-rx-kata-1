/// <reference path="../../typings/browser.d.ts" />
import {Subject} from "@reactivex/Rxjs";
import {IAction} from "./IAction";

var subject$ = new Subject<IAction>();
function publish(action:IAction):void {
    subject$.next(action);
}

export {
    subject$ as intent$,
    publish
}