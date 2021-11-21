import Head from 'next/head'
import {NavbarContainer, FooterContainer} from '../components'



const MyLauout = ({title='Next', children, showSidebar=false}) => {

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