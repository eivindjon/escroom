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
          <Nav.Link href="/Home">Topplista</Nav.Link>
          <NavDropdown title="Fag" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">Matematikk</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Samfunnsfag</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">
              Naturfag
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
