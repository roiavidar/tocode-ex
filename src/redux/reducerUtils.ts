import produce from 'immer';

function convertActionTypeToName(actionType: string) {
    return actionType.toLowerCase().replace(/_(\w)/g, v => v[1].toUpperCase());
  }
  
  export default function createReducer(handlers: any, initialState: any) {
    return produce(function reducer(state = [], action: any) {
      const key = convertActionTypeToName(action.type);
      const handler = handlers[key];
      if (handler) {
        return handler(state, action);
      } else {
        return state;
      }
    }, initialState);
  }
  