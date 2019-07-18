import React from "react"

import Bio from "../components/bio"
import Header from "../components/header"
import "../styles/index.scss"

const bioTitle = "sounds of electronic pop"
const bio = "The combination of Alison Cohen and Daniel Arci"

function home(){
    return(
        <div>
            <Header title="DANC"/>
            <Bio title={bioTitle} bio={bio} />
        </div>
    )
}

export default home