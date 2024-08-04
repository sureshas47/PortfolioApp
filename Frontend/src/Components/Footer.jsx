// Footer.js

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "../../src/App.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer text-center text-lg-start text-md-start">
      <Container>
        <div className="text-center mt-4">
          <p>&copy; Suresh Adhikari - {year}</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
