import React from 'react'
import Header from './Header'

const Headers = ({ headers }) =>  headers.map(header => <Header header={header} />) 

export default Headers
