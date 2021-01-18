import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./index.scss";

const NavigationBar = () => (
  <Navbar expand="lg" className="w-100 position-fixed">
    <Container>
      <Navbar.Brand href="#" className="mr-5 navbar__brand">Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar__toggler" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#" className="navbar__link navbar__link--margin">Home</Nav.Link>
          <Nav.Link href="#" className="navbar__link navbar__link--margin">Work</Nav.Link>
          <Nav.Link href="#" className="navbar__link navbar__link--margin">Contact</Nav.Link>
          <Nav.Link href="#" className="navbar__link navbar__link--margin">About Me</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#" className="navbar__link">Sign Up</Nav.Link>
          <Nav.Link href="#" className="navbar__link">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavigationBar;