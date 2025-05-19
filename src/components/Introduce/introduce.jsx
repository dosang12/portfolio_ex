import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h2>What I Do</h2>
        <h4>Introducing Myself</h4>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={"Digital Product Planner"}
            disc={`사용자 중심의 사고와 명확한 커뮤니케이션을 바탕으로 웹·앱 서비스의 흐름과 구조를 기획합니다. 다양한 산업군의 프로젝트에서 FO·BO 화면 설계, 요구사항 정의, 운영 정책 수립 등 기획 전반을 수행하며, 사용성과 실현 가능성 사이의 균형을 고민합니다.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"프로젝트 리더 & 커뮤니케이터"}
            disc={`기획자의 시야를 바탕으로 프로젝트의 일정과 산출물을 총괄하고, 이해관계자 간의 원활한 소통을 주도합니다. 변화에 유연하게 대응하며, 고객·디자인·개발 간의 간극을 조율하는 커뮤니케이션 허브 역할을 수행합니다.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"Front-end 기반 기획자"}
            disc={`퍼블리싱과 프론트엔드 개발 흐름에 대한 이해를 바탕으로, 구현 가능성과 협업 효율을 고려한 실용적인 기획을 설계합니다. 화면 구조와 기능 정의에 있어 개발과 디자인 사이의 언어를 연결하며, 기획 의도가 정확하게 전달되도록 조율합니다.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1152px;
  margin: 0 auto;
  padding: 5rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h2 {
    text-align: center;
    font-size: 36px;
  }
  h4 {
    text-align: center;
    font-size: 16px;
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
  line-height: 1.5;
  word-break: keep-all;
  grid-auto-rows: 1fr;
  div {
    height: 100%;
    p {
      padding: auto 0;
      font-size: 16px;
    }
  }
`;
