import React from 'react'
import styles from './Preview.module.scss'
import Image from "next/image";
import { FaGooglePlay } from "react-icons/fa";
import { BsMouse } from "react-icons/bs";
import { AiOutlineArrowDown } from "react-icons/ai";

const Preview = ({imageSrc}) => {
    
    const scrollToFooter = () => {
        window.scrollTo({
            top: (document.body.clientHeight - document.getElementById('footer').clientHeight),
            behavior: "smooth"
        });
    }
    
    return (
            <div className={styles.Container}>
                <div className={styles.Container__box}>
                    <div className={styles.Container__text}>
                        <h1>
                            Hi, I'am Alexa
                        </h1>
                        <p>
                            Товарищи при всех трудностях которые сложились во всем мире, нужно признать что нам необходимо заниматься саморазвитием, наша площадка желает быть максимально полезной и предоставляет всем желающим обучится в чему нибудь новому, бесплатные курсы в различных сферах. 
                        </p>
                        <p>
                            Хочется рассказать вам о моем проекте, данный фонд был открыт для разговора с гражданами на любые темы, целью фонда является помощь населению в оказании различной поддержки, образования, и политграмотности. Ищу добрых друзей, чтобы быть добрым другом для вас. Всем удачи, и до встречи.
                        </p>
                        <div onClick={scrollToFooter} className={styles.Container__BtnContact}>
                            Contact Me
                            <FaGooglePlay/>
                        </div>
                    </div>
                    <div className={styles.Container__backImg}>
                        <Image src={imageSrc} />
                    </div>
                </div>
                <div className={styles.Container__scrollBox}>
                    <BsMouse size={"2rem"}/>
                        Scroll down
                    <AiOutlineArrowDown/>
                </div>
            </div>
    )
}

export default Preview
