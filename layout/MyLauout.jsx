import Head from 'next/head'
import { useRouter } from "next/router"




const MyLauout = ({title='Next', children, showSidebar=false}) => {
    const router = useRouter()
    
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main className="App">
                {children}
            </main>
        </>
    )
}


export default MyLauout