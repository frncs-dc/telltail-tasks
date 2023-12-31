import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavigationBar() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary border">
        <Container>
          <Navbar.Brand href="/Home">Tell Tail Tasks</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Home">Your Tasks</Nav.Link>
              <Nav.Link href="/Story">Story</Nav.Link>
              <Nav.Link href="/AboutUs">About</Nav.Link>
              <Nav.Link href="/PetSystem"> Pet System</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <NavDropdown title="Username" id="basic-nav-dropdown" href="/" align="end">
                  <NavDropdown.Item href="/">Log In</NavDropdown.Item>
                  <NavDropdown.Item href="/Profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Pet View</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Task View</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Settings</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}


export default NavigationBar
