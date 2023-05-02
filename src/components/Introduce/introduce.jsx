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
            title={"UI/UX designer"}
            disc={`저는 ui/ux designer로써 디자인과 사용자 경험을 항상 고민하며, 직관적이고 사용하기 쉬운 인터페이스를 만들기 위해 노력합니다. 최신 디자인 트렌드와 기술 동향을 항상 살피며, 다양한 프로젝트에 적용할 수 있는 창의적인 디자인 솔루션을 제공합니다.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"Front-end Deveoloper"}
            disc={`저는 최신 프론트엔드 기술을 이용하여 웹 애플리케이션과 웹 사이트를 개발하며, 반응형 웹 디자인을 구현하려고 노력합니다. 저는 깔끔하고 효율적인 코드를 작성하기 위해 최선을 다하며 지속적인 개선과 리팩토링을 수행합니다. 또한, 다양한 디바이스와 브라우저 호환성을 고려합니다.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"Project Planner"}
            disc={`저는 프로젝트 기획과 관리를 주도합니다. 창의적인 아이디어를 제시하여 기획을 주도하고 프로젝트의 목표와 일정을 계획합니다. 또한 프로젝트의 진행 상황을 모니터링하고, 적절한 문제 해결능력을 바탕으로 문제가 발생하면 당황하지 않고 침착하고 정확하게 대처합니다.  `}
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
      font-size: 14px;
    }
  }
`;
