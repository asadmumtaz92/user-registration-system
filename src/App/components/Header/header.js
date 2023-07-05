import React from 'react'
import styles from './header.module.css'

const Header = (props) => {
    return (
        <div className={styles.header}>
            <div className={styles.leftBox}>
                <h2>Employee Portal</h2>
            </div>

            {props?.status == 'home'
                && <div className={styles.rightBox}>
                    <div className={styles.tab}><p>Menu-1</p></div>
                    <div className={styles.tab}><p>Menu-2</p></div>
                    <div className={styles.tab}><p>Menu-3</p></div>
                    <div className={styles.tab} onClick={props?.logout}><p>Logout</p></div>
                </div>
            }
        </div>
    )
}

export default Header
