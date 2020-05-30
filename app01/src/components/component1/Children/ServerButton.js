import React from 'react'
import Button from '../../reusable/Button'

const ServerButton = ({ socket, event, data, buttonName, className,disabled }) =>

    <center><button
    onClick={() => socket.emit(event, data)}
    className={className}
    disabled={disabled}
>{buttonName}</button></center>

export default ServerButton
