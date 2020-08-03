import React from 'react';
import { connect } from 'react-redux';
import { IMessage, AppState } from '../../redux/store';
import { deleteMessage } from '../../redux/actions';

function mapStateToProps(state: AppState) {
    const chat = state.chat;
    return {
        messages: chat.messages.filter((message: IMessage) => (
            chat.activeRoomId === message.roomId
        )),
    }
}

// Higher Order Component
export default connect(mapStateToProps)(function Messages(props: {
    messages: IMessage[],
    dispatch: (action: any) => void
}) {
    const { messages, dispatch } = props;

    function renderMessage(message: IMessage) {
        return (
            <div>{message.from}: {message.text} <button onClick={() => onDeleteMessage(message.id)}>Delete</button></div>
        );
    }

    function onDeleteMessage(messageId: number) {
        dispatch(deleteMessage(messageId));
    }

    return (
        <div className='messages'>
            {
                messages.map((message: IMessage) => (
                    renderMessage(message)
                ))
            }
        </div>
    )
});