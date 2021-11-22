import React from 'react'
import styles from './Navbar.module.scss'
import { MyNav} from './MyNav'


export const NavMobile = ({setShowMenu, showMenu}) => {
    
    return (
        <div className={styles.NavbarWrapper__navMobile}>
            <div onClick={() => setShowMenu(prev => !prev)} className={showMenu ? `${styles.NavbarWrapper__btnMenu} ${styles.active}` : styles.NavbarWrapper__btnMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>  
            {showMenu && <MyNav/>}
        </div>
    )
}


