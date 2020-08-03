import React, { useState, ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { addMessage, addDelay } from '../../redux/actions';

// Higher Order Component
export default connect()(function Header(props: {
    dispatch: (action: any) => void
}) {
    const {dispatch} = props;
    const [message, setMessage] = useState<string>('');
    const [delay, setDelay] = useState<boolean>(false);

    function onMessageSend() {
        let messageAction = addMessage(message);
        if (delay) {
           let delayMessageAction = addDelay(messageAction, 2000) ;
           dispatch(delayMessageAction);
        } else {
            dispatch(messageAction);
        }
        setMessage('');
    }

    function onDelayChanged(event: ChangeEvent<HTMLInputElement>) {
        setDelay(!delay);
    }

    return (
       <div>
           <input value={message} type="text" placeholder="type your message" onChange={(event) => setMessage(event?.target.value)} />
           <button onClick={onMessageSend}>Send</button>
           <label>
               Delay:
               <input type="checkbox" checked={delay} onChange={onDelayChanged} />
           </label>
       </div>
    )
});