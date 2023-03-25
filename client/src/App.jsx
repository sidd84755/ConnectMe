import React from 'react'
import { StreamChat } from 'stream-chat';
import { ChannelList, Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

const apiKey = 'hhvddqgk8qft'

const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div className='app_wrapper'>
      <Chat client={client} theme="team light">
        <ChannelListContainer/>

        <ChannelListContainer/>
      </Chat>
    </div>
  )
}

export default App
