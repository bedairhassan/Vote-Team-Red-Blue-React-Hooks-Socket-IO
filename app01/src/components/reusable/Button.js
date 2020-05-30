import React from 'react'

const Button = ({onClick,buttonName,className})=>
<button onClick={onClick} className={className}>{buttonName}</button>

export default Button
