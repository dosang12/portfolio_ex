import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";
import { FaLinkedinIn } from "react-icons/fa";
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
          <h1 className="mainmassage">
            기획도 잘하는 프론트엔드! <br /> 상상 이상을 만드는 도상!
          </h1>
          <br />
          <h3>신입 프론트엔드 / 기획자 윤도상입니다.</h3>
          <p>저는 개발자로서 창의적이고 도전적인 마인드로 항상 새로운 기술과 개발 방법을 탐구합니다.</p>
          <button>Let's talk</button>
          <Social>
            <p>Check out my</p>
            <div className="social-icons">
              <span>
                <a href="/">
                  <AiOutlineInstagram />
                </a>
              </span>
              <span>
                <a href="/">
                  <GiEarthAmerica />
                </a>
              </span>
              <span>
                <a href="/">
                  <FaLinkedinIn />
                </a>
              </span>
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
  padding-top: 10rem;
  width: 100%;
  @media (max-width: 640px) {
    width: 100%;
    padding-top: 3rem;
  }
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2.5rem;
    font-family: "Pretendard", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 400;
    word-break: keep-all;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #73a079;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
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
      background-color: #99cc99;
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
    right: 0;
    top: 30%;
    z-index: 99;
  }
  img {
    position: absolute;
    left: -150px;
    width: 110%;
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
