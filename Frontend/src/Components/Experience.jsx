import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";
import { IoIosDownload } from "react-icons/io";
import { Link } from "react-router-dom";

function Experience() {
  const StyledText = styled.div`
    p {
      font-size: 22px; /* Adjust the font size as needed */
      margin-bottom: 15px; /* Adjust the margin as needed */

      font-weight: 200;
      color: #cacaca;
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

            <Row>
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
            <Row style={{ marginTop: "20px" }}>
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
        <Row style={{ margin: "120px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            <Link
              to="https://drive.google.com/file/d/1AbGP42owg3i0TOujv0HtAu92Ax0l9mAc/view?usp=sharingf"
              style={{ textDecoration: "none" }}
            >
              <Button
                className="primary"
                style={{
                  textAlign: "center",
                  color: "#ffffff",
                  fontWeight: "500",
                  fontSize: "18px",
                  padding: "8px 10px",
                  border: "1px solid #ffffff",
                  backgroundColor: "transparent",
                }}
              >
                Download My Resume{" "}
                <span className="text-warning" style={{ marginLeft: "10px" }}>
                  {" "}
                  <IoIosDownload />
                </span>
              </Button>
            </Link>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Experience;
