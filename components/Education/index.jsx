import styles from "./Education.module.scss"
import Image from "next/image";

const Education = ({imageSrc}) => {
    return (
        <div className={styles.Container}>
            <div className={styles.Container__box}>
                <div className={styles.Container__backImg}>
                    <Image src={imageSrc} alt=""/>
                </div>
                <div className={styles.Container__text}>
                        <h1>
                            Mediation
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti illum minima dicta, blanditiis consequuntur exercitationem.
                        </p>
                        <div className={styles.Container__BtnRegistration}>
                            Перейти к курсам
                        </div>
                </div>
            </div>
            <div className={styles.Container__scrollBox}>
                
            </div>
        </div>
    )
}

export default Education
