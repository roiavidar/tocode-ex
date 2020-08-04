import React from 'react';
import { connect } from 'react-redux';
import { IMessage, AppState } from '../../redux/store';

const messagesCounterStyle = {
    backgroundColor: 'red',
    borderRadius: '50%',
    display: 'inline-block',
    fontSize: '30px',
    minWidth: '50px',
    textAlign: 'center' as  const
}

function mapStateToProps(state: AppState) {
    const chat = state.chat;
    return {
        messages: chat.messages.filter((message: IMessage) => (
            chat.activeRoomId === message.roomId
        )),
    }
}

// Higher Order Component
export default connect(mapStateToProps)(function CounterMessages(props: {
    messages: IMessage[]
}) {
    const { messages } = props;

    return (
        <div className='messages' style={messagesCounterStyle}>
            { messages.length }
        </div>
    )
});