import { MiddlewareAPI } from "redux";

export default (store: MiddlewareAPI)  => (next: any) => (action: {payload: {meta?: { delay?: number}}}) => {
    if (action.payload.meta && action.payload.meta.delay) {
        setTimeout(() => {
            next(action);
        }, action.payload.meta.delay);
    } else {
        return next(action);
    }
};