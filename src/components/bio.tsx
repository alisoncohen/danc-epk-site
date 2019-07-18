import React from "react"
import * as styles from "./bio.module.scss"

type THeaderProps = {
    title?: string,
    bio: string
}

function Header({title, bio}: THeaderProps){
    return(
        <div className={styles.bio_wrapper}>
            {bio?<h2 className={styles.bio_title}>{title}</h2>:null}
            <p className={styles.bio_text}>{bio}</p>
        </div>
    )
}

export default Header;