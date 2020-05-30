import React,{useEffect} from 'react'

const InputData = ({input,string,defaults})=>{

    useEffect(() => input(prompt(string, defaults).toString().toLowerCase()), [])

    return(<h1></h1>)
}

export default InputData
