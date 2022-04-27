import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

function NavBar() {
    return(
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Raf's Tennis Club</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Players" id="basic-nav-dropdown">
                <NavDropdown.Item href="/findplayer">Find a Player</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/rankings">View Rankings</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/updatepoints">Update Points</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar;