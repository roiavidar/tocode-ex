import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../../redux/actions';

// Higher Order Component
export default connect()(function Header(props: {
    dispatch: (action: any) => void
}) {
    const {dispatch} = props;
    const messageBox = useRef<HTMLInputElement | null>(null);

    function onMessageSend() {
        if (messageBox.current) {
            dispatch(addMessage(messageBox.current.value));
        }
    }

    return (
       <div>
           <input ref={messageBox} type="text" placeholder="type your message" />
           <button onClick={onMessageSend}>Send</button>
       </div>
    )
});