import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import "../../src/App.css";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={12}>
            <h1>
              Expand Your Business Today.
              <br />
              <span>Need Website ?</span>
            </h1>
            <p>Get your business grow 10x faster before it is too late.</p>
            <Button variant="light" className="text-primary" size="lg">
              Book Now <FaArrowRight style={{ marginLeft: "8px" }} />
            </Button>
          </Col>
          <Col lg={6} md={12}>
            <Image
              src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Hero Image"
              className="hero-image rounded-3 shadow-lg p-3 bg-primary rounded mt-3 mt-lg-0"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
