import { MiddlewareAPI } from "redux";
import { UNDO } from "../constants";

let prevStore: any;

export default (store: MiddlewareAPI)  => (next: any) => (action: {type: string, payload: {prevStore: any}}) => {
    if (action.type === UNDO) {
        action.payload.prevStore = prevStore;
    } else {
        prevStore = store.getState();
    }

    return next(action);
};