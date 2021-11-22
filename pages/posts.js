
import styles from '../styles/PostPage.module.scss'
import MyLauout from '../layout/MyLauout'
import {Post} from '../components'
import { AiOutlineInfoCircle } from "react-icons/ai";
import {useState, useRef, useEffect} from 'react'



// text, image, user, date
const listPost = [
    {
        user: 'Tom',
        image: 'https://natalyland.ru/wp-content/uploads/0/2/c/02c97fc44dee4c04ce319942a059b1fc.jpeg',
        text: 'Потерялась собачка прозьба помочь найти ее. Ее внешний вид на фото ...',
        date: 'Sun Nov 21 2021 22:12:24 GMT+0300'
    },
    {
        user: 'Tom',
        image: 'https://www.culture.ru/storage/images/b5b7e5309630181835c39a7b11a26f06/4c7803a96c5a95f7e913a8ba7a523940.jpeg',
        text: 'Потерялась кошка прозьба помочь найти ее. Ее внешний вид на фото ...',
        date: 'Sun Nov 21 2021 22:12:24 GMT+0300'
    },
    {
        user: 'Tom',
        image: 'https://animalreader.ru/wp-content/uploads/2015/09/rejting-samyh-miroljubivyh-porod-sobak-animal-reader.-ru-003-1024x768.jpg',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ducimus unde maiores autem nostrum, dicta vero vitae laborum libero quisquam quis praesentium voluptatibus sequi nisi tenetur minima quam inventore illo quos nesciunt voluptas quas? Assumenda, optio corporis debitis laboriosam architecto ea error nisi quas quae itaque inventore iusto! Recusandae possimus quibusdam vero dignissimos, voluptatibus quam eum ducimus esse optio beatae ex quaerat cupiditate, saepe quia nemo voluptatum. Deserunt quae dolor iste debitis. Voluptatum blanditiis ullam reprehenderit. Eligendi, at esse laborum id sint culpa hic odio quis, eaque reprehenderit nulla ut in ducimus optio, quidem doloribus quasi fugit et magni nisi. Perspiciatis aut veritatis cumque eligendi aliquam vero iure eos deleniti recusandae iste? Aut quo eum corrupti officia atque quisquam deleniti, nisi dolores eveniet eaque temporibus, incidunt quos. Doloremque enim provident dolore distinctio illum voluptatum harum illo recusandae. Numquam error quaerat, cumque voluptatem doloremque quis quos odio modi a possimus repellendus! Quibusdam nulla alias vel unde rem temporibus tenetur corporis ullam. Repellat exercitationem obcaecati asperiores dolores possimus, doloribus cum illum. Neque officiis optio, quo voluptatibus exercitationem quia laborum ipsum velit sapiente rem est aspernatur minus nulla fugit culpa tempore doloremque expedita veritatis ab incidunt dolores! Sequi excepturi laborum voluptates corporis, odio debitis dolores sint eum blanditiis deserunt illum minima assumenda vero consequuntur voluptas earum cumque repellendus? Sequi neque repellat animi. Vero at aspernatur nesciunt repudiandae inventore consequuntur odio culpa nam maiores a suscipit, commodi soluta quidem! Aspernatur, deleniti quos aliquam laudantium dolor esse possimus odit, ipsa saepe a in sapiente maiores!',
        date: 'Sun Nov 21 2021 22:12:24 GMT+0300'
    },
    {
        user: 'Tom',
        image: '',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repellat quasi, doloribus neque, minima doloremque sequi, porro aliquid debitis laboriosam non vero ea voluptatum modi. Blanditiis quidem illum expedita aliquam voluptas totam nostrum sunt enim. Deleniti eum, quia nam velit similique laborum hic, eveniet exercitationem alias provident debitis, eos doloribus.', 
        date: 'Sun Nov 21 2021 22:12:24 GMT+0300'
    },
    {
        user: 'Tom',
        image: '',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repellat quasi, doloribus neque, minima doloremque sequi, porro aliquid debitis laboriosam non vero ea voluptatum modi. Blanditiis quidem illum expedita aliquam voluptas totam nostrum sunt enim. Deleniti eum, quia nam velit similique laborum hic, eveniet exercitationem alias provident debitis, eos doloribus.', 
        date: 'Sun Nov 21 2021 22:12:24 GMT+0300'
    },
    {
        user: 'Tom',
        image: 'https://www.culture.ru/storage/images/b5b7e5309630181835c39a7b11a26f06/4c7803a96c5a95f7e913a8ba7a523940.jpeg',
        text: 'Потерялась кошка прозьба помочь найти ее. Ее внешний вид на фото ...',
        date: 'Sun Nov 21 2021 22:12:24 GMT+0300'
    },
    {
        user: 'Tom',
        image: 'https://www.culture.ru/storage/images/b5b7e5309630181835c39a7b11a26f06/4c7803a96c5a95f7e913a8ba7a523940.jpeg',
        text: 'Потерялась кошка прозьба помочь найти ее. Ее внешний вид на фото ...',
        date: 'Sun Nov 21 2021 22:12:24 GMT+0300'
    },
    {
        user: 'Tom',
        image: 'https://www.culture.ru/storage/images/b5b7e5309630181835c39a7b11a26f06/4c7803a96c5a95f7e913a8ba7a523940.jpeg',
        text: 'Потерялась кошка прозьба помочь найти ее. Ее внешний вид на фото ...',
        date: 'Sun Nov 21 2021 22:12:24 GMT+0300'
    },
    {
        user: 'Tom',
        image: 'https://www.culture.ru/storage/images/b5b7e5309630181835c39a7b11a26f06/4c7803a96c5a95f7e913a8ba7a523940.jpeg',
        text: 'Потерялась кошка прозьба помочь найти ее. Ее внешний вид на фото ...',
        date: 'Sun Nov 21 2021 22:12:24 GMT+0300'
    },
    {
        user: 'Tom',
        image: 'https://www.culture.ru/storage/images/b5b7e5309630181835c39a7b11a26f06/4c7803a96c5a95f7e913a8ba7a523940.jpeg',
        text: 'Потерялась кошка прозьба помочь найти ее. Ее внешний вид на фото ...',
        date: 'Sun Nov 21 2021 22:12:24 GMT+0300'
    },
    
]


const Posts = () => {
    const [showBoxInfo, setShowBoxInfo] = useState(false)
    const boxIndoRef = useRef()
    const btnIndoRef = useRef()

    const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(btnIndoRef.current) && !path.includes(boxIndoRef.current) ) {
            setShowBoxInfo(false);
        }
    };

    useEffect(()=>{
        document.body.addEventListener('click', handleOutsideClick);
        return function (){
            document.body.removeEventListener('click', handleOutsideClick);
        }
    },[])

    return (
        <MyLauout>
            <div className={styles.Post}>
                <div className={styles.Post__container}>
                    <div className={styles.Post__top}>
                        <div className={styles.Post__btn}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Создать пост
                        </div>
                        <div ref={btnIndoRef} onClick={()=> setShowBoxInfo(prev => !prev)} className={styles.Post__info}>
                            <AiOutlineInfoCircle/>
                        </div>
                        {
                            showBoxInfo &&  <div ref={boxIndoRef} className={styles.Post__boxInfo}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla cupiditate nisi numquam beatae suscipit fugiat?
                            </div>
                        }
                       
                    </div>
                    <div className={styles.Post__items}>
                        {listPost.map((item, index) => {return <Post key={index} {...item}  />} ) }
                    </div>
                </div>
            </div>
        </MyLauout>
        
    )
}

export default Posts
