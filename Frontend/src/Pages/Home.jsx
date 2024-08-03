import React from "react";
import Hero from "../Components/Hero";
import Background from "../Components/Background";
import TechnicalSkills from "../Components/TechnicalSkills";
import styled from "styled-components";
import Experience from "../Components/Experience";

function Home() {
  const StyledComponent = styled.div`
    margin: 150px 0;
  `;

  return (
    <>
      <Hero />
      <Background />
      <StyledComponent>
        <TechnicalSkills />
      </StyledComponent>
      <Experience />
    </>
  );
}

export default Home;
