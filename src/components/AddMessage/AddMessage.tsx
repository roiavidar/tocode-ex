import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../../redux/actions';

// Higher Order Component
export default connect()(function Header(props: {
    dispatch: (action: any) => void
}) {
    const {dispatch} = props;
    const [message, setMessage] = useState<string>('');

    function onMessageSend() {
        dispatch(addMessage(message));
        setMessage('');
    }

    return (
       <div>
           <input value={message} type="text" placeholder="type your message" onChange={(event) => setMessage(event?.target.value)} />
           <button onClick={onMessageSend}>Send</button>
       </div>
    )
});