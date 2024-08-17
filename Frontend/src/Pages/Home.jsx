import React from "react";
import Hero from "../Components/Hero";
import Background from "../Components/Background";
import TechnicalSkills from "../Components/TechnicalSkills";
import styled from "styled-components";
import Experience from "../Components/Experience";
import FeaturedProjects from "../Components/FeaturedProjects";
import { FaChevronCircleUp } from "react-icons/fa";

const StyledComponent = styled.div`
  margin: 150px 0;
`;

// const ScrollToTopButton = styled.div`
//   position: fixed;
//   bottom: 20px;
//   right: 30px;
//   background-color: #ffc107; /* Background color */
//   color: white;
//   border: none;
//   border-radius: 50%;
//   width: 50px;
//   height: 50px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//   font-size: 24px;
//   transition: background-color 0.3s;
//   z-index: 1000;

//   &:hover {
//     background-color: #0056b3; /* Darker shade on hover */
//   }
// `;

function Home() {
  const handleScrollToTop = (event) => {
    event.preventDefault();
    document.getElementById("hero").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="background">
        <Background />
      </section>
      <section id="technical-skills">
        <StyledComponent>
          <TechnicalSkills />
        </StyledComponent>
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="featured-projects">
        <FeaturedProjects />
      </section>
      {/* <ScrollToTopButton onClick={handleScrollToTop}>
        <FaChevronCircleUp size={30} />
      </ScrollToTopButton> */}
    </>
  );
}

export default Home;
