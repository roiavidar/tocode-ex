import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../redux/store';

function mapStateToProps(state: AppState) {
    return {
        username: state.chat.username,
    }
}

// Higher Order Component
export default connect(mapStateToProps)(function Header(props :{
    username: string
}) {
    const { username } = props;
    return (
        <div className='banner'>
            <p>Hello {username}</p>
        </div>
    )
});