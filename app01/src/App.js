import React, { useEffect, useState } from 'react'
import Parent from './components/component1/Parent'

var socket = require('socket.io-client')('http://localhost:4000');


function App() {

  const disconnect = () => socket.emit(`disconnect`, { src: socket.id })
  useEffect(() => window.addEventListener('beforeunload', () => disconnect()), [])

  return (

    <div>
      <Parent socket={socket}/>
    </div>
  )
}

export default App
