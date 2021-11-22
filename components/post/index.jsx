import React, {useState} from 'react'
import styles from './Post.module.scss'

function Post({text, image, user, date, title="Title"}) {
    const [clickBtn, setClickBtn] = useState(false)

    return (
        <div onClick={()=>{setClickBtn(prev => !prev)}} className={clickBtn? `${styles.wrapper} ${styles.full}` :styles.wrapper}>
            <div  className={clickBtn? `${styles.content} ${styles.full}` :styles.content}>
                
            {image &&
                <img src={image} alt="image_for_user" />
            }
            <p>{title}</p>
            {text}
            </div>
           
        </div>
    )
}

export default Post
