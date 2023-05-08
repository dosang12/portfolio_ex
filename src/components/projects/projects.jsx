import React from "react";
import styled from "styled-components";
import projectData from "./projectsData.json";
import ProjectCard from "./ProjectCard";
import PageHeader from "../PageHeader";

const Portfolio = () => {
  const ProjectList = () =>
    projectData.map((project, i) => (
      <ProjectCard
        key={i}
        id={project.id}
        title={project.title}
        technologies={project.technologies}
        image={project.image}
        color={project.bgcolor}
        github={project.github}
        deployed={project.deployed}
        description={project.description}
        page={project.page}
        member={project.member}
        share={project.share}
      />
    ));

  return (
    <Container id="project">
      <section className="portfolio" id="project">
        <PageHeader title="Project List" description="View my work" />
        <div className="row">
          <ProjectList />
        </div>
      </section>
    </Container>
  );
};

export default Portfolio;

const Container = styled.div`
  width: 90%;
  max-width: 1152px;
  margin: 0 auto;
  padding: 1rem 0;

  @media (max-width: 840px) {
    width: 90%;
  }
`;
