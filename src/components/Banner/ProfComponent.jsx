import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import myImage from "../images/dosang2.png";
import { motion } from "framer-motion";
import { EarthCanvas } from "../canvas";
import { slideIn } from "../utils/motion";

const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>안녕하십니까!</h4>
          <h1>
            기획도 잘하는 프론트엔드! <br /> 상상 이상을 만드는 도상!
          </h1>
          <br />
          <h3>신입 프론트엔드 / 기획자 윤도상입니다.</h3>
          <p>저는 개발자로서 창의적이고 도전적인 마인드로 항상 새로운 기술과 개발 방법을 탐구합니다.</p>
          <a href="#project">Go to Project!</a>
          <Social>
            <p>Check out my</p>
            <div className="social-icons">
              <span> </span>
              <span> </span>
              <span> </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="earth">
            <EarthCanvas />
          </motion.div>
          <img className="profileImg" src={myImage} alt="profile" />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  width: 90%;
  max-width: 1152px;
  margin: 0 auto;
  z-index: 1;
  .css-2qfv45 {
    width: 60%;
    @media (max-width: 640px) {
      width: 100%;
    }
  }
  .css-17ud6we {
    width: 40%;
    text-align: center;
    @media (max-width: 640px) {
      width: 100%;
    }
  }

  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const Texts = styled.div`
  flex: 1;
  word-break: break-all;
  padding-top: 8rem;
  width: 100%;
  @media (max-width: 640px) {
    width: 100%;
    padding-top: 3rem;
  }
  h4 {
    padding: 2rem 0;
    font-size: 1.2rem;
    font-weight: 500;
  }
  h1 {
    font-size: 2.5rem;
    letter-spacing: 2px;
    line-height: 3.5rem;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-top: 2rem;
  }
  p {
    padding: 1.2rem 1rem 1.2rem 0;
    font-weight: 400;
    word-break: keep-all;
  }

  a {
    display: inline-block;
    padding: 0.7rem 2rem;
    text-decoration: none;
    margin-top: 3rem;
    background-color: #1c3f39;
    border: none;
    color: #fff;
    font-weight: 500;
    transition: transform 400ms ease-in-out;
    :hover {
      transform: translateY(-10px);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #1c3f39;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  .earth {
    position: absolute;
    width: 150px;
    height: 150px;
    left: -100px;
    top: 10%;
    z-index: 99;
    @media (max-width: 1060px) {
      right: -50px;
    }
    @media (max-width: 790px) {
      position: absolute;
      right: 150px;
    }

    @media (max-width: 660px) {
      position: absolute;
      left: 250px;
    }
  }
  img {
    position: absolute;
    right: -30px;
    padding-top: 30px;
    width: 90%;
    transition: transform 400ms ease-in-out;
    margin: 0;
    @media (max-width: 1060px) {
      left: -50px;
    }
    @media (max-width: 790px) {
      width: 20rem;
      left: -50px;
    }

    @media (max-width: 660px) {
      width: 18rem;
      position: relative;
    }

    @media (max-width: 640px) {
      width: 15rem;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
