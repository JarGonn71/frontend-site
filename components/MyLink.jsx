import Link from 'next/link'
import { useRouter } from 'next/router';

import styles from '../components/Navbar/Navbar.module.scss'

const MyLink = ({href, children}) => {
    const router = useRouter()
    // console.log(router)
    return (
        <Link href={href}>
            <a className={router.asPath === href? `${styles.active}`: ""}>{children}</a>
        </Link>
    )
}

export default MyLink
