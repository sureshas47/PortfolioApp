import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

function Experience() {
  const StyledText = styled.div`
    p {
      font-size: 22px; /* Adjust the font size as needed */
      margin-bottom: 15px; /* Adjust the margin as needed */

      font-weight: 200;
      color: #cacaca;
      padding: 0 50px;
    }
    h1 {
      font-size: 26px;
      text-transform: uppercase;
      /* text-align: right; */
    }
  `;
  return (
    <>
      <Container>
        <Row>
          <Col md={3}>
            <StyledText>
              <h1 className="text-warning my-2">Experience</h1>
            </StyledText>
          </Col>
          <Col md={9}>
            <StyledText>
              <p className="mb-4">
                I have a proven track record of delivering high-quality
                applications. I have worked on various projects, from small to
                large, and I am always looking for new challenges.
              </p>
            </StyledText>

            <Row style={{ padding: "0 50px" }}>
              <Col md={8}>
                <StyledText>
                  <h5>Devsign Technologies</h5>
                  <p className="p-0 ">Frontend Developer</p>
                </StyledText>
              </Col>
              <Col md={4}>
                <StyledText>
                  <p
                    style={{
                      fontSize: "18px",
                      fontWeight: "200",
                      color: "#ffffff",
                      wordSpacing: "5px",
                      textAlign: "left",
                      padding: "0",
                    }}
                  >
                    Oct 2019 - Feb 2023
                  </p>
                </StyledText>
              </Col>
            </Row>
            <Row style={{ padding: "0 50px", marginTop: "20px" }}>
              <Col md={8}>
                <StyledText>
                  <h5>PrismaSoft</h5>
                  <p className="p-0 ">Fullstack Developer Intern</p>
                </StyledText>
              </Col>
              <Col md={4}>
                <StyledText>
                  <p
                    style={{
                      fontSize: "18px",
                      fontWeight: "200",
                      color: "#ffffff",
                      wordSpacing: "5px",
                      textAlign: "left",
                      padding: "0",
                    }}
                  >
                    Jan 2019 - April 2019
                  </p>
                </StyledText>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Experience;
