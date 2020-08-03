export function receivedRooms(newListOfRooms: {id :number, name: string}[]) {
    return { type: 'RECEIVED_ROOMS', payload: newListOfRooms };
}

export function setActiveRoom(roomId: number) {
return { type: 'SET_ACTIVE_ROOM', payload: roomId };
}

export function createRoom(roomName: string) {
return { type: 'CREATE_ROOM', payload: roomName };
}

export function setUsername(newUsername: string) {
return { type: 'SET_USERNAME', payload: newUsername };
}
  
export function addMessage(newMessage: string) {
    return {
        type: 'ADD_MESSAGE', payload: {message: newMessage}
    }
}

export function deleteMessage(messageToDelete: number) {
    return {
        type: 'DELETE_MESSAGE',
        payload: messageToDelete
    }
}

export function undoLastChatAction() {
    return {
        type: 'UNDO',
        payload: {}
    }
}

export function addDelay(action: { payload: any }, delay: number) {
    action.payload.meta = {
        delay
    };
    return action;
}
  