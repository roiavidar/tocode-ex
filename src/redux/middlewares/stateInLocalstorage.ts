import { MiddlewareAPI } from "redux";
import { LOAD_FROM_LOCALSTORAGE, CHAT_STATE } from "../constants";

export default (store: MiddlewareAPI)  => (next: any) => (action: {type: string, payload: {loadedState: any, action: any}}) => {
    if (action.type === LOAD_FROM_LOCALSTORAGE) {
        const chatState = localStorage.getItem(CHAT_STATE);
        if (chatState) {
            action.payload.loadedState = JSON.parse(chatState);
            next(action);
        }
    } else {
        next(action);
        const state = store.getState();
        localStorage.setItem(CHAT_STATE, JSON.stringify(state));
    }
};