import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state: {
    username: string
}) {
    return {
        username: state.username,
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