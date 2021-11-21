import React from 'react'
import styles from './Navbar.module.scss'
import {MyLink} from '..'

export const MyNav = () => {
    return (
        <div className={styles.NavbarWrapper__nav}>
            <MyLink href={"/"}>
                Главная
            </MyLink>
            <MyLink href={"#"}>
                Обучение
            </MyLink>
            <MyLink href={"#"}>
                Посты
            </MyLink>
            <MyLink href={"/auth-user"}>
                Войти
            </MyLink>
        </div>
    )
}

