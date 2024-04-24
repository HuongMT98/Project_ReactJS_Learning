import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import { NavLink } from "react-router-dom"
import "./Header.scss"

function Header() {
  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container>
        <NavLink to='/' className={"navbar-brand"}>
          Learning ReactJS
          {/* <img src='https://picsum.photos/200' className='w-25 h-25' /> */}
        </NavLink>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <NavLink to='/' className='nav-link'>
              Home
            </NavLink>
            <NavLink to='users' className='nav-link'>
              User
            </NavLink>
            <NavLink to='admin' className='nav-link'>
              Admin
            </NavLink>
          </Nav>
          <Nav>
            <NavDropdown title='Setting' id='basic-nav-dropdown'>
              <NavDropdown.Item>Log In</NavDropdown.Item>
              <NavDropdown.Item>Log Out</NavDropdown.Item>
              <NavDropdown.Item>User Info</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
