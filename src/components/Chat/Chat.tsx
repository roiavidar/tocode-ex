import React from 'react';
import Header from '../ChatHeader/Header';
import Banner from '../Banner/Banner';
import Messages from '../Messages/Messages';
import AddMessage from '../AddMessage/AddMessage';

export default function Chat() {
    return (
        <div>
          <Header />
          <Banner />
          <Messages />
          <AddMessage />
        </div>
    )
}