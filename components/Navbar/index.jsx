import { Navbar, Container, Nav } from 'react-bootstrap';
import styles from './Navbar.module.scss'

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
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#">Обучение</Nav.Link>
                <Nav.Link href="#">Посты</Nav.Link>
                <Nav.Link href="#">
                  in Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
        
    )
}

export default NavbarContainer
