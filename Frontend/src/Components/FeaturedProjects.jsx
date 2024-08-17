import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { data } from "../Data";

function FeaturedProjects() {
  const [featuredWorks, setFeaturedWorks] = useState([]);

  useEffect(() => {
    console.log(data);
    setFeaturedWorks(data);
  }, []);

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
  const CardPara = styled.div`
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
              <h1 className="text-warning my-2">Featured Projects</h1>
            </StyledText>
          </Col>
          <Col md={9}>
            <StyledText>
              <p className="mb-5">
                Throughout my career, I have developed numerous projects that
                have allowed me to gain valuable skills in both frontend and
                backend development. These projects provided me with hands-on
                experience in creating effective and innovative solutions using
                a range of technologies and frameworks. Here are some of the key
                projects I have worked/working on:
              </p>
            </StyledText>

            {featuredWorks?.map((featuredWork) => {
              return (
                <>
                  <div className="my-5">
                    <Tabs
                      defaultActiveKey="image"
                      id="justify-tab-example"
                      className="mb-4"
                      justify
                      style={{
                        border: "none",
                      }}
                    >
                      <Tab
                        eventKey="image"
                        title="Image"
                        style={{
                          marginTop: "20px",
                        }}
                      >
                        <Image
                          src={featuredWork.image}
                          style={{
                            width: "100%",
                            height: "100%",
                            border: "2px solid #ffc107",
                            borderRadius: "10px",
                            objectFit: "fill",
                            objectPosition: "center",
                          }}
                        />
                        <Row>
                          <CardPara>
                            <p className="mt-4" stytle>
                              {featuredWork.name}
                            </p>

                            {featuredWork.technologiesUsed.map((stack) => {
                              return (
                                <>
                                  <span
                                    className="me-2"
                                    style={{
                                      padding: "6px 10px",
                                      border: "1px solid #ffc107",
                                      borderRadius: "10px",
                                      color: "#fffff",
                                      fontWeight: "400",
                                    }}
                                  >
                                    {stack}
                                  </span>
                                </>
                              );
                            })}
                          </CardPara>
                        </Row>{" "}
                        <Row className="mt-4">
                          <CardPara>
                            <p>{featuredWork.desc}</p>
                          </CardPara>
                        </Row>
                      </Tab>

                      <Tab
                        eventKey="video"
                        title="Video"
                        style={{ marginTop: "20px" }}
                      >
                        <video
                          src={featuredWork.video}
                          controls
                          style={{
                            width: "100%",
                            height: "100%",
                            border: "2px solid #ffc107",
                            borderRadius: "10px",
                          }}
                        />
                        <Row>
                          <CardPara>
                            <p className="mt-4" stytle>
                              {featuredWork.name}
                            </p>

                            <Row>
                              {featuredWork.technologiesUsed.map((stack) => {
                                return (
                                  <>
                                    <Col
                                      style={{
                                        display: "flex",
                                        justifyContent: "space-evenly",
                                      }}
                                    >
                                      <span
                                        style={{
                                          padding: "6px 10px",
                                          border: "1px solid #ffc107",
                                          borderRadius: "10px",
                                          color: "#fffff",
                                          fontWeight: "400",
                                        }}
                                      >
                                        {stack}
                                      </span>
                                    </Col>
                                  </>
                                );
                              })}
                            </Row>
                          </CardPara>
                        </Row>
                        <Row className="mt-4">
                          <CardPara>
                            <p>{featuredWork.desc}</p>
                          </CardPara>
                        </Row>
                      </Tab>
                    </Tabs>
                  </div>
                </>
              );
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default FeaturedProjects;
