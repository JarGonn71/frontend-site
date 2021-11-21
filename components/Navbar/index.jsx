import { Navbar, Container, Nav } from 'react-bootstrap';
import styles from './Navbar.module.scss'
import { NavMobile } from './NavMobile'
import { MyNav } from './MyNav'
import {useState, useEffect} from 'react'


const NavbarContainer = () => {
    
  const [showMenu, setShowMenu] = useState(false)

    useEffect(() => {
        if(showMenu){
            document.body.style.overflow = "hidden"
        }else{
          document.body.style.overflow = "auto"
        }
    }, [showMenu])


  const scrollToHeader = () => {
    if(window){
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }

  return (
    <div className={styles.NavbarWrapper}>
      <div className={styles.NavbarWrapper__Container}>
        <div onClick={scrollToHeader} className={styles.NavbarWrapper__Logo}>
          Logo
        </div>
        <div className={styles.NavbarWrapper__navDesktop}>
          <MyNav/>
        </div>
        <NavMobile showMenu={showMenu} setShowMenu={setShowMenu}/>
      </div>
        
    </div>
        
  )
}

export default NavbarContainer
