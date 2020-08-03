import { createStore } from 'redux';
import produce from 'immer';
import { getNextId } from 'mobx/lib/internal';

const initialState: IChatState = {
  rooms: [
    { id: 0, name: 'Loby' },
    { id: 1, name: 'JavaScript Chats' },
  ],
  activeRoomId: 0,
  messages: [
    { id: 0, roomId: 0, from: 'ynon', text: 'Hello Everyone' },
  ],
  username: "guest",
};

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

const reducer = produce((state, action) => {
  switch(action.type) {
    case 'SET_USERNAME':
      state.username = action.payload;
      break;

    case 'RECEIVED_MESSAGE':      
      state.messages.push(action.payload);
      break;

    case 'CREATE_ROOM':
      state.rooms.push({ id: nextId(state.rooms), name: action.payload });
      break;

    case 'SET_ACTIVE_ROOM':
      state.activeRoomId = action.payload;
      break;

    case 'RECEIVED_ROOMS':
      state.rooms = action.payload;
      break;

    case 'ADD_MESSAGE':
        state.messages.push({
            id: nextId(state.messages),
            roomId: state.activeRoomId,
            from: state.username,
            text: action.payload
        });
        break;

    case 'DELETE_MESSAGE':
        state.messages = state.messages.filter((message: IMessage) => {
            return message.id !== action.payload
        });
        break;
  }
}, initialState);

const store = createStore(reducer);
(window as any).store = store;
export default store;

