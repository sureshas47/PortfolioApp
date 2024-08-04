import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const StyledText = styled.div`
  p,
  h5 {
    font-size: 18px;
    color: #cacaca;
    margin-bottom: 15px;
    font-weight: 200;
  }
  p {
    padding: 0 50px;
    font-size: 22px;
  }

  h1 {
    font-size: 26px;
    text-transform: uppercase;
    /* text-align: right; */
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin-bottom: 10px;
    color: #cacaca;
    font-size: 18px;
  }
`;

function TechnicalSkills() {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <StyledText>
            <h1 className="text-warning my-2">Technical Skills</h1>
          </StyledText>
        </Col>
        <Col md={9}>
          <StyledText>
            <p className="mb-4">
              With over 3 years of experience in software development, I bring a
              wealth of knowledge and expertise in various cutting-edge
              technologies. My technical skills encompass a wide range of
              programming languages, development frameworks, and tools essential
              for building modern web applications. I am dedicated to continuous
              learning and creating efficient, scalable, and user-friendly
              applications. Below is a comprehensive list of my technical
              proficiencies:
            </p>
          </StyledText>

          <Row style={{ padding: "0 50px" }}>
            <Col>
              <h5>Languages</h5>
              <StyledText>
                <ul>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>PHP</li>
                  <li>Java</li>
                  <li>C#</li>
                  <li>Python</li>
                </ul>
              </StyledText>
            </Col>
            <Col>
              <h5>Frameworks</h5>
              <StyledText>
                <ul>
                  <li>React</li>
                  <li>Next</li>
                  <li>Express</li>
                  <li>ASP.NET</li>
                  <li>Selenium</li>
                  <li>Jest</li>
                </ul>
              </StyledText>
            </Col>
            <Col>
              <h5>APIs</h5>
              <StyledText>
                <ul>
                  <li>RESTful</li>
                  <li>GraphQL</li>
                  <li>Web Socket</li>
                </ul>
              </StyledText>
              <h5>Databases</h5>
              <StyledText>
                <ul>
                  <li>MySQL</li>
                  <li>SQL Server</li>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                  <li>Firebase</li>
                </ul>
              </StyledText>
            </Col>
            <Col>
              <h5>Tools</h5>
              <StyledText>
                <ul>
                  <li>Webpack</li>
                  <li>Babel</li>
                  <li>Git</li>
                  <li>VS Code</li>
                  <li>Visual Studio</li>
                  <li>Android Studio</li>
                  <li>Postman</li>
                  <li>Figma</li>
                  <li>MS Visio</li>
                  <li>Jira</li>
                  <li>BrowserStack</li>
                </ul>
              </StyledText>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default TechnicalSkills;
