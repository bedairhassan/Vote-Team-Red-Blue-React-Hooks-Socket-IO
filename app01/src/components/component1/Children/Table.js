import React from 'react'
import Headers from './Headers'

const Table = ({ headers, data,className }) =>
    <table className={className}>
        <thead>
            <Headers headers={headers} />
        </thead>
        <tbody>
            {/* <tr><td></td></tr> */}
            {data.map(({ team, count }) => <tr>
                <td>{team}</td>
                <td>{count}</td>
            </tr>)}
        </tbody>
    </table>

export default Table
