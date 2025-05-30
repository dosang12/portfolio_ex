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
        info={project.info}
      />
    ));

  return (
    <Container id="project">
      <section className="portfolio" id="project">
        <PageHeader title="Project List" description="View my work" />
        <div className="row">
          <ProjectList />
        </div>
        <div style={{ fontSize: "20px", fontWeight: "bold", marginTop:"30px" }}> 상단 프로젝트 외 </div>
        <div style={{ fontSize: "20px", marginTop:"10px" }}> 삼성SDS 내부 시스템 FLOPS 리뉴얼 (2025.02 ~ 진행 중)</div>
        <div style={{ fontSize: "20px", marginTop:"10px" }}> 파르나스 인터컨티넨탈 호텔(구축진행중, 스페셜오퍼 FO,BO 담당)</div>
        <div style={{ fontSize: "20px", marginTop:"10px" }}> 기타 프로젝트 제안서 업무 경험 다수 보유</div>
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
