import { Navbar, Container, Nav } from 'react-bootstrap';
import styles from './Navbar.module.scss'
import {MyLink} from '../'


const NavbarContainer = () => {

    return (
      <div className={styles.NavbarWrapper}>
        <Navbar bg="transparent" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="justify-content-end">
              <Nav
                className="my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >

                <MyLink href={"/"}>
                  Главная
                </MyLink>

                <MyLink href={"#"}>
                  Обучение
                </MyLink>

                <MyLink href={"#"}>
                  Посты
                </MyLink>

                <MyLink href={"/auth-user"}>
                   in Login
                </MyLink>
               
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
        
    )
}

export default NavbarContainer
