import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
  const handleScroll = (event, sectionId) => {
    event.preventDefault();
    document.getElementById(sectionId).scrollIntoView({
      behavior: "smooth", // Smooth scroll effect
      block: "start", // Scroll to the start of the element
    });
  };

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
                <Nav.Link className="active text-white" href="/">
                  Home
                </Nav.Link>
                <Nav.Link
                  className=" text-white"
                  onClick={(e) => handleScroll(e, "background")}
                >
                  Background
                </Nav.Link>
                <Nav.Link
                  className=" text-white"
                  onClick={(e) => handleScroll(e, "technical-skills")}
                >
                  Skills
                </Nav.Link>
                <Nav.Link
                  className=" text-white"
                  onClick={(e) => handleScroll(e, "experience")}
                >
                  Experience
                </Nav.Link>
                <Nav.Link
                  className=" text-white"
                  onClick={(e) => handleScroll(e, "featured-projects")}
                >
                  Projects
                </Nav.Link>
                <Nav.Link className=" text-white" href="/blog">
                  Blog
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
