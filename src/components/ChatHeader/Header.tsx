import React from 'react';
import { connect } from 'react-redux';
import { setUsername } from '../../redux/actions';
import CounterMessages from '../Messages/CounterMessages';
import { AppState } from '../../redux/store';

function mapStateToProps(state: AppState) {
    return {
        username: state.chat.username,
    }
}

// Higher Order Component
export default connect(mapStateToProps)(function Header(props: {
    username: string,
    dispatch: (action: any) => void
}) {
    const { username, dispatch } = props;

    function handleChangeEvent(e: { target: { value: any; }; }) {
        dispatch(setUsername(e.target.value));
    }

    return (
        <div className='header'>
            <CounterMessages />
            <label>
                Username: 
                <input type="text" onChange={handleChangeEvent} value={username} />

            </label>
        </div>
    )
});