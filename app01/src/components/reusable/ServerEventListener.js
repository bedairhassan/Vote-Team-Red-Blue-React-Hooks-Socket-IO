import React,{useEffect} from 'react'

const ServerEventListener = ({socket,input,event})=>{

    useEffect(() =>   

    socket.on(event,data=>input(data))

    , [])

    return(<h1></h1>)
}

export default ServerEventListener
