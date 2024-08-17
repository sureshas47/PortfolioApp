import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../../src/App.css";
import { FaArrowRight, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const Hero = () => {
  const tiltAnimation = keyframes`
  0% { transform: rotate(0deg); }
  20% { transform: rotate(-15deg); }
  40% { transform: rotate(15deg); }
  60% { transform: rotate(-15deg); }
  80% { transform: rotate(15deg); }
  100% { transform: rotate(0deg); }
`;
  const StyledText = styled.div`
    span {
      font-weight: 400;
    }

    p {
      margin-bottom: 30px;
    }

    .emoji {
      display: inline-block;
      animation: ${tiltAnimation} 1s ease-in-out;
    }
  `;

  const emojiRef = useRef(null);
  useEffect(() => {
    if (emojiRef.current) {
      emojiRef.current.classList.add("emoji");
      // Remove the animation class after it's done (optional)
      const timer = setTimeout(() => {
        emojiRef.current.classList.remove("emoji");
      }, 3000); // Duration should be equal to or greater than animation duration
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={12}>
            <StyledText>
              <p className="fs-1">
                Hi! <strong ref={emojiRef}>👋</strong>
              </p>
              <p className="fs-3">
                I'm <span>Suresh Adhikari</span>, a Full Stack Web Developer
                expertise in the MERN stack, adept at building robust and
                scalable web applications.
              </p>

              <p className="text-warning text-underline fs-4">
                Get in touch <FaArrowRight style={{ marginLeft: "8px" }} />{" "}
                <span className="mx-2">
                  <Link
                    className="text-white"
                    to="https://www.linkedin.com/in/adhikari-suresh/"
                  >
                    <FaLinkedin size={24} />
                  </Link>
                </span>
                <span className="mx-2">
                  <Link
                    className="text-white"
                    to="/https://github.com/sureshas47"
                  >
                    <FaGithub size={24} />
                  </Link>
                </span>
              </p>
            </StyledText>
          </Col>
          <Col lg={6} md={12}>
            <Image
              src="https://i.ibb.co/tMG3y1P/3d-rendering-computer-desk.png"
              alt="Hero Image"
              className="hero-image"
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
