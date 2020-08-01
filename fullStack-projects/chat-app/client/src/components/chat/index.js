import './index.css'

import io from 'socket.io-client'
import queryString from 'query-string'
import React, { useState, useEffect } from 'react'

import Input from '../input'
import InfoBar from '../info-bar'
import Messages from '../messages'
import TextContainer from '../text-container'

let socket

const Chat = ({ location }) => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const ENDPOINT = 'localhost:5000'

  useEffect(() => {
    const { name, room } = queryString.parse(location.search)

    socket = io(ENDPOINT)

    setName(name)
    setRoom(room)

    socket.emit('join', { name, room }, (error) => {
      // alert(error)
    })

    return () => {
      socket.emit('disconnect')

      socket.off()
    }
  }, [ENDPOINT, location.search])

  useEffect(() => {
    socket.on('message', message => {
      setMessages([...messages, message])
    })
  }, [messages])

  const sendMessage = e => {
    e.preventDefault()

    if(message){
      socket.emit('sendMessage', message, () => setMessage(''))
    }
  }

  return(
    <div className='outerContainer'>
      <div className='container'>
        <InfoBar room={room} />
        <Messages
          name={name}
          messages={messages}
        />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      {/* <TextContainer users={users} /> */}
    </div>
  )
}

export default Chat