import React, { useEffect, useState } from 'react'
import Table from './Children/Table'
import DisplayString from './Children/DisplayString'
import ServerButton from './Children/ServerButton'
import InputData from '../reusable/InputData'
import ServerEventListener from '../reusable/ServerEventListener'

import defaults from './defaults'

const Parent = ({ socket }) => {

    const [team, teamSet] = useState(defaults.team) // input
    const [table, tableSet] = useState([])

    const buttonColor = team===`red`?"btn btn-danger":
    
    (team===`blue`? "btn btn-primary":"btn btn-warning")
   
    const buttonName=team===`red` || team===`blue` ? `Vote UP!` : `red/blue`

    const isCorrectTeamColor = team===`red` || team===`blue`

    return (

        <React.Fragment>
            <ServerEventListener
                event={`Vote`}
                input={data => tableSet(data)}
                socket={socket}
            />

            <InputData
                input={team => teamSet(team)}
                string={"Please enter your team, `Red/Blue`"}
                defaults={defaults.team}
            />

            <DisplayString
                string={`Your team is ${team}`}
                condition={isCorrectTeamColor}
            />

            <Table
                className={`table table-striped`}
                headers={[`team`, `count`]}
                data={table}
            />

            <ServerButton
                socket={socket}
                event={`Vote`}
                data={team}
                buttonName={buttonName}
                className={buttonColor}
                disabled={!isCorrectTeamColor}
            />

        </React.Fragment>
    )
}




export default Parent
