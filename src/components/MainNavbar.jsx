import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const MainNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={"https://picsum.photos/30/30"}
            className="d-inline-block align-top"
            id="nav-logo"
          />{" "}
          Escaperoom Fløysbonn skole
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/Home">Hjem</Nav.Link>
          <Nav.Link href="/Home">Escape rooms</Nav.Link>
          <Nav.Link href="/Home">Min side</Nav.Link>
        </Nav>
        <Nav.Link className="mr-auto" href="/Signin">Logg inn</Nav.Link>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
