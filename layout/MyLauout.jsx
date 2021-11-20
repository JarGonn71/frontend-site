import Head from 'next/head'
import { useRouter } from "next/router"
import {NavbarContainer, FooterContainer} from '../components'



const MyLauout = ({title='Next', children, showSidebar=false}) => {
    const router = useRouter()
    
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
           
            <main className="App">
                <NavbarContainer/>
                <div className="Container">
                    {children}
                </div>    
                <FooterContainer/>
            </main>
        </>
    )
}


export default MyLauout