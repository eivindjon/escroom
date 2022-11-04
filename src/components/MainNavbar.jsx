import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { UserAuth } from "../context/AuthContext";

const MainNavbar = () => {
  const { user, logOut } = UserAuth();

  const handleGoogleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

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
        <Nav>
          {/* if user is logged in show "Logg ut", else show Logg inn */}
          {user?.displayName ? (
            <Nav.Link
              className="mr-auto"
              href="/Home"
              onClick={handleGoogleSignOut}
            >
              Logg ut
            </Nav.Link>
          ) : (
            <Nav.Link className="mr-auto" href="/Signin">
              Logg inn
            </Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
