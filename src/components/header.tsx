import React from "react"

type THeaderProps = {
    title: string
}

function Header({title}: THeaderProps){
    return(
        <h1>{title}</h1>
    )
}

export default Header;