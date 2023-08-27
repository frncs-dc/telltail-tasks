import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavigationBar() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary border">
        <Container>
          <Navbar.Brand href="/">Tell Tail Tasks</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Your Tasks</Nav.Link>
              <Nav.Link href="/Story">Story</Nav.Link>
              <Nav.Link href="/AboutUs">About</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <NavDropdown title="Username" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
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
