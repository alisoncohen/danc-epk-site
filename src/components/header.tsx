import React from "react"
import * as styles from "./header.module.scss"

type THeaderProps = {
    title: string
}

function Header({title}: THeaderProps){
    return(
        <div className={styles.title_wrapper}>
            <h1 className={styles.title}>{title}</h1>
        </div>
    )
}

export default Header;