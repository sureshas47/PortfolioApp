import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
  return (
    <>
      {" "}
      <Navbar expand="lg" className="navbar ">
        <Container>
          {" "}
          <Container>
            {" "}
            <Navbar.Brand className=" text-white" href="/">
              Suresh Adhikari
            </Navbar.Brand>
          </Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Container>
              <Nav className="ml-auto">
                <Nav.Link className="active text-white" href="#home">
                  Home
                </Nav.Link>
                <Nav.Link className=" text-white" href="#projects">
                  Projects
                </Nav.Link>
                <Nav.Link className=" text-white" href="#about">
                  About
                </Nav.Link>
                <Nav.Link className=" text-white" href="#contact">
                  Contact
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
