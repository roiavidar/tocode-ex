import React from 'react';
import { connect } from 'react-redux';
import { IChatState, IMessage } from '../../redux/store';
import { deleteMessage } from '../../redux/actions';

function mapStateToProps(state: IChatState) {
    return {
        messages: state.messages.filter((message: IMessage) => (
            state.activeRoomId === message.roomId
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