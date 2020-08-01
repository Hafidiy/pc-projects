import './index.css'

import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'

import Message from './message'

const Messages = ({ messages, name }) => (
  <ScrollToBottom className='messages'>
    {messages.map((message, i) => (
      <div key={i}>
        <Message
          name={name}
          message={message}
        />
      </div>
    ))}
  </ScrollToBottom>
)

export default Messages