import {useState} from 'react'
import MyLauout from '../layout/MyLauout'
import {Registration, Login} from '../components'

import styles from '../styles/Auth.module.scss'

export default function Auth() {
  const [state, setstate] = useState(true)

  return (
    <MyLauout>
        <div className={styles.Auth}>
            <div className={styles.Auth__Container}>
                <div className={styles.Auth__top}>
                    <div className={state? `${styles.active}`: ''} onClick={()=>setstate(true)}>
                        Вход
                    </div>
                    <div className={!state? `${styles.active}`: ''} onClick={()=>setstate(false)}>
                        Регистрация
                    </div>
                </div>
                <div className={styles.Auth__form}>
                    {state? <Login/>: <Registration/>}
                </div>
            </div>
        </div>
    </MyLauout>
  )
}
