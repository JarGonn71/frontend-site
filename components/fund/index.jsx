import React from 'react'
import styles from './Fund.module.scss'
import Image from "next/image";

const FundContainer = ({imageSrc}) => {
    return (
        <div className={styles.Container}>
            <div className={styles.Container__box}>
                <div className={styles.Container__backImg}>
                    <Image src={imageSrc} />
                </div>
                <div className={styles.Container__text}>
                        <h1>
                            Name Fund
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti illum minima dicta, blanditiis consequuntur exercitationem.
                        </p>
                        <div className={styles.Container__BtnRegistration}>
                            Принять участие
                        </div>
                </div>
            </div>
            <div className={styles.Container__scrollBox}>
                
            </div>
        </div>
    )
}

export default FundContainer
