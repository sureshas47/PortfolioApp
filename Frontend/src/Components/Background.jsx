import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const StyledText = styled.div`
  p {
    font-size: 22px;
    margin-bottom: 15px;

    font-weight: 200;
    color: #cacaca;
  }
  h1 {
    font-size: 26px;
    text-transform: uppercase;
    /* text-align: right; */
  }
  span {
    color: #ffffff;
    font-weight: 400;
  }
`;

const MyComponent = () => {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <StyledText>
            <h1 className="text-warning my-2">Background</h1>
          </StyledText>
        </Col>
        <Col md={9}>
          <StyledText>
            <p>
              I am currently <span>learning DevOps</span> to enhance my
              understanding of the development lifecycle and improve my ability
              to manage and deploy scalable applications efficiently, which is
              essential for ensuring CI/CD in modern web development.
            </p>
            <p>
              I am currently pursuing a{" "}
              <span>Postgraduate Certificate in Web Development</span> at
              Conestoga College in Waterloo, Ontario. This program is enhancing
              my skills and knowledge, preparing me for advanced challenges in
              the field.
            </p>
            <p>
              My journey in software engineering has been driven by a passion
              for blending technical prowess with design sensibilities. I thrive
              on creating solutions that are not only robust and scalable but
              also deliver exceptional user experiences.
            </p>
            <p>
              <span> Apart from writing apps</span>, I enjoy playing badminton,
              riding my two-wheeler, diving into new TV shows and movies.
            </p>

            <p>
              I am enthusiastic about connecting with like-minded professionals
              and exploring new opportunities for collaboration. Let's build
              something amazing together!
            </p>
          </StyledText>
        </Col>
      </Row>
    </Container>
  );
};

export default MyComponent;
