import produce from 'immer';

function convertActionTypeToName(actionType: string) {
    return actionType.toLowerCase().replace(/_(\w)/g, v => v[1].toUpperCase());
}

interface HandlersMap {
    [handlerKey: string]: ((state: any, action: any) => void)[];
}

interface SubReducers {
    [partialSubReducerKey: string]: {
         [handlerKey: string]: (state: any, action: any) => void;
    }; 
}

interface RootReducer {
    [subreducersKey: string]: SubReducers
}

function createHandlersMap(rootReducer: RootReducer) {
    const handlersMap: HandlersMap = {};
    for (const subreducerKey in rootReducer) {
        for (const partialSubReducerKey in rootReducer[subreducerKey])  {
            for (const handlerName in rootReducer[subreducerKey][partialSubReducerKey]) {
                const handler = rootReducer[subreducerKey][partialSubReducerKey][handlerName];
                handlersMap[handlerName] = handlersMap[handlerName] ?  [...handlersMap[handlerName], handler] : [handler]
            }
        }
    }
    return handlersMap;
}

export default function createReducer(rootReducer: RootReducer, initialState: any) { 
    const handlersMap = createHandlersMap(rootReducer);

    return produce(function reducer(state = [], action: any) {
        const key = convertActionTypeToName(action.type);
        const handlers = handlersMap[key];
        if (handlers) {
            return handlers.reduce(function(state, handler) {
                handler(state, action);
                return state;
            }, state);
        } else {
        return state;
        }
    }, initialState);
}