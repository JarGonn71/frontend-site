import React from 'react'
import styles from './FooterContainer.module.scss'
import { FaInstagram, FaOdnoklassniki, FaTwitter, FaFacebookF} from "react-icons/fa";


const FooterContainer = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.Container__Box}>
                <div className={styles.Container__Logo}>
                    LogoName
                </div>
                <div className={styles.Container__Contact}>
                   <div className={styles.Container__phone}>
                        Мой номер телефлна: <div>+7(999)-666-99-66</div> 
                        Моя почта: <div>test.pochta@gmail.com</div> 
                   </div>
                   
                   <div className={styles.Container__socialNetworks}>
                        <span>Social Media:</span>
                        <div>
                            <a href="#"><FaInstagram/></a>
                            <a href="#"><FaOdnoklassniki/></a>
                            <a href="#"><FaTwitter/></a>
                            <a href="#"><FaFacebookF/></a>
                        </div>
                   </div>
                   
                </div>
                <div className={styles.Container__Fund}>
                    FundName
                </div>
            </div>
        </div>
    )
}

export default FooterContainer
