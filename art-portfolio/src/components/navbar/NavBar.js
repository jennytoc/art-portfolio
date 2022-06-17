import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"
import "./NavBarStyles.css"

function NavBar() {

  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link as={Link} to="/digital-art" className='navbar-item'>Digital Art</Nav.Link>
            <Nav.Link as={Link} to="/paper-and-ink" className='navbar-item'>Paper and Ink</Nav.Link>
            <Nav.Link as={Link} to="/contact-me" className='navbar-item'>Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar;