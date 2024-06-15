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
        <Row>
          <Col lg={2} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Connect with Me</h5>
            <ul className="list-unstyled d-flex justify-content-center justify-content-md-start">
              <li className="d-flex ">
                <a href="" className="footer-link">
                  <FaLinkedin size={24} />
                </a>
                <a href="" className="footer-link mx-3">
                  <FaGithub size={24} />
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={2} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Projects</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="footer-link">
                  Project 1
                </a>
              </li>
              <li>
                <a href="#!" className="footer-link">
                  Project 2
                </a>
              </li>
              <li>
                <a href="#!" className="footer-link">
                  Project 3
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={2} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Skills</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="footer-link">
                  Skill 1
                </a>
              </li>
              <li>
                <a href="#!" className="footer-link">
                  Skill 2
                </a>
              </li>
              <li>
                <a href="#!" className="footer-link">
                  Skill 3
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={2} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Resources</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="footer-link">
                  Blog
                </a>
              </li>
              <li>
                <a href="#!" className="footer-link">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#!" className="footer-link">
                  Portfolio
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={2} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">About</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="footer-link">
                  About Me
                </a>
              </li>
              <li>
                <a href="#!" className="footer-link">
                  Resume
                </a>
              </li>
              <li>
                <a href="#!" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={2} md={6} className="mb-4 mb-md-0 subscribe">
            <h5 className="text-uppercase">Subscribe</h5>
            <form method="post">
              <input type="text" className="form-control" placeholder="Name" />
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
              <button type="button" className="btn btn-success btn-block">
                Subscribe
              </button>
            </form>
          </Col>
        </Row>
        <div className="text-center mt-4">
          <p>&copy; Suresh Adhikari - {year}</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
