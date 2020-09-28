/*
Author: chankruze (chankruze@geekofia.in)
Created: Mon Sep 28 2020 15:57:13 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import styles from './Navbar.module.css'
import FlatNavButton from '../Buttons/FlatNavButton'
import MenuItems from './MenuItems'

const loginHandle = () => {
    alert(`Logging In...`)
}

const payloadLogin = {
    content: 'login',
    styleClass: 'hvr-wobble-horizontal',
    clickHandler: loginHandle
}

function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.brandWrapper}>
                <img className={styles.logo}
                    src="https://avatars3.githubusercontent.com/u/41100705"
                    alt="Logo" />
                <h1 className={styles.title}>
                    geekofia
                </h1>
            </div>
            <div className={styles.linksWrapper}>
                {
                    MenuItems.map(({ title, path, hoverClass }) => <a href={path} className={`${hoverClass} ${styles.link}`}>{title}</a>)
                }
                <FlatNavButton payload={payloadLogin} />
            </div>
        </div>
    )
}

export default Navbar
