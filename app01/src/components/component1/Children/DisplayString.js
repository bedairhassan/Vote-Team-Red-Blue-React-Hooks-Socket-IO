import React from 'react'

const DisplayString = ({string,condition}) => <center><h6>{condition?string:`Your team is non-existent`}</h6></center>

export default DisplayString
