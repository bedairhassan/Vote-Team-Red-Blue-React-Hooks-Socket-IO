import React from 'react'
import Button from '../../reusable/Button'

const ServerButton = ({socket,event,data,buttonName,className})=>  
<Button onClick={() => socket.emit(event,data)} buttonName={buttonName} class={className}/>

export default ServerButton
