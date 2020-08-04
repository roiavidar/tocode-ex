import { createStore, applyMiddleware } from 'redux';
import createReducer from './reducerUtils';
import delayMiddleWare from './middlewares/delay';
import undoMiddleware from './middlewares/undo';
import { loadFromLocalstorage } from './actions';
import stateInLocalstorage from './middlewares/stateInLocalstorage';

const initialState: { chat: IChatState } = {
  chat: {
    rooms: [
        { id: 0, name: 'Loby' },
        { id: 1, name: 'JavaScript Chats' },
      ],
      activeRoomId: 0,
      messages: [
        { id: 0, roomId: 0, from: 'ynon', text: 'Hello Everyone' },
      ],
      username: "guest",
  }  
};

export interface AppState {
    chat: IChatState 
}

export interface IChatState {
      rooms: IRoom[],
      activeRoomId: number,
      messages: IMessage[],
      username: string,
}

export interface IRoom {
    id: number,
    name: string
}

export interface IMessage {
    id: number
    roomId: number,
    from: string,
    text: string
}

function nextId(items: {id :number}[]) {
  return Math.max(...items.map(i => i.id)) + 1;
}

const account = {
    setUsername(state: AppState, action: {payload: string}) {
        state.chat.username = action.payload;
    }
}

const rooms = {
    createRoom(
        state: AppState,
        action: { payload: string }) {
            const chat = state.chat;
            chat.rooms.push({ id: nextId(chat.rooms), name: action.payload });
    },
    setActiveRoom(state: AppState, action: {payload: number}) {
        state.chat.activeRoomId = action.payload; 
    },
    receivedRooms(state: AppState, action: {payload: IRoom[]}) {
        state.chat.rooms = action.payload;
    }
}

const messages = {
    addMessage(
        state: AppState,
        action: {payload: { message: string}}
    ) {
        const chat = state.chat;
        chat.messages.push({
            id: nextId(chat.messages),
            roomId: chat.activeRoomId,
            from: chat.username,
            text: action.payload.message
        });  
    },
    deleteMessage(state: AppState, action: {payload: number}) {
        const chat = state.chat;
        chat.messages = chat.messages.filter((message: IMessage) => {
            return message.id !== action.payload
        });
    }
}

const state = {
    undo(state: AppState,
        action: { payload: { prevStore: AppState}}) {
            state.chat = action.payload.prevStore.chat;
    },
    loadFromLocalstorage(
        state: AppState,
        action: { payload: {loadedState: AppState}}) {
            state.chat = action.payload.loadedState.chat;
    }
}

const chat = {
    account,
    rooms,
    messages,
    state
};

const appReducer = {
    chat
}

const reducer = createReducer(appReducer, initialState);

const store = createStore(reducer,applyMiddleware(undoMiddleware, delayMiddleWare, stateInLocalstorage));
store.dispatch(loadFromLocalstorage());
(window as any).store = store;
export default store;

