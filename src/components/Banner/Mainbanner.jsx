import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import myImage from "../images/dosang2.png";
import { motion } from "framer-motion";
import { EarthCanvas } from "../canvas";
import { slideIn } from "../utils/motion";

const Mainbanner = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h3>안녕하십니까!</h3>
          <h1>
            기획도 잘하는 프론트엔드! <br /> 상<span className="first">상</span> 이<span className="second">상</span>을 만드는 도<span className="third">상</span>!
          </h1>
          <br />
          <h3>신입 프론트엔드 / 기획자 윤도상입니다.</h3>
          <p>저는 개발자로서 창의적이고 도전적인 마인드로 항상 새로운 기술과 개발 방법을 탐구합니다.</p>
          <a href="https://drive.google.com/file/d/15PGAMnh5fsiyd7T9PHz2dYuuc9e4fNxB/view?usp=sharing" target="_blank">
            Go to 이력서!
          </a>
          <a href="https://github.com/dosang12" target="_blank">
            Go to 깃허브!
          </a>
          {/* <Social>
            <p>Check out my</p>
            <div className="social-icons">
              <span> </span>
              <span> </span>
              <span> </span>
            </div>
          </Social> */}
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

export default Mainbanner;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  width: 90%;
  max-width: 1152px;
  margin: 0 auto;
  margin-top: 20px;
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
  span {
    display: inline-block;
    position: relative;
    font-size: 42px;
    transition: transform 0.3s ease-in-out;
    padding: 1px;
    animation-name: bounce;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
  }

  .first {
    animation-delay: 0s;
  }

  .second {
    animation-delay: 0.5s;
  }

  .third {
    animation-delay: 1s;
  }

  @keyframes bounce {
    0% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(5deg);
      color: #005307;
    }
    100% {
      transform: rotate(0);
    }
  }

  @media (max-width: 640px) {
    width: 100%;
    padding-top: 3rem;
  }
  h1 {
    font-size: 2.5rem;
    letter-spacing: 2px;
    line-height: 3.5rem;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding: 2rem 0;
  }
  p {
    padding: 1.2rem 1rem 1.2rem 0;
    font-weight: 400;
    word-break: keep-all;
    font-size: 1.2rem;
  }

  a {
    display: inline-block;
    padding: 0.7rem 2rem;
    text-decoration: none;
    margin: 2rem 10px 10px 0;
    border-radius: 20px;
    background-color: #1c3f39;
    border: none;
    color: #fff;
    font-weight: 500;
    transition: transform 400ms ease-in-out;
    :hover {
      transform: translateY(-5px);
    }
  }
`;
const Profile = styled.div`
  .earth {
    position: absolute;
    width: 150px;
    height: 150px;
    right: 0px;
    top: 10%;
    z-index: 99;
    @media (max-width: 1060px) {
      right: 0px;
    }
  }
  img {
    position: absolute;
    right: 100px;
    padding-top: 30px;
    width: 90%;
    transition: transform 400ms ease-in-out;
    margin: 0;
    filter: drop-shadow(2px 4px 60px rgba(0, 0, 0, 0.08));
    @media (max-width: 1060px) {
      left: -50px;
    }

    @media (max-width: 640px) {
      position: relative;
      width: 15rem;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;