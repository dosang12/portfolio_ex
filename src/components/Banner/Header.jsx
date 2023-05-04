import React, { useState } from "react";
import styled from "styled-components";
import myLogo from "../images/logo192.png";
import Lottie from "react-lottie";
import earth from "../Lottie/earth_commu.json";
import hand from "../Lottie/hand_shake.json";
import idea from "../Lottie/idea_circle.json";
import loader from "../Lottie/Loader.json";

const Header = () => {
  const [bar, setBar] = useState(false);
  const handleClick = () => {
    setBar(false);
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
    hand,
    idea,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Container bar={bar}>
      <Logo>
        <a href="#">
          <span>
            <Lottie options={defaultOptions} height={100} width={100} />
          </span>
          Just Do!
        </a>
      </Logo>
      <Nav bar={bar}>
        <span>
          <a href="#home" onClick={handleClick}>
            Home
          </a>
        </span>
        <span>
          <a href="#service" onClick={handleClick}>
            Services
          </a>
        </span>
        <span>
          <a href="#project" onClick={handleClick}>
            Projects
          </a>
        </span>
        <span>
          <a href="#Skills" onClick={handleClick}>
            Myskills
          </a>
        </span>
        <span>
          <a href="#footer" onClick={handleClick}>
            Contact
          </a>
        </span>
      </Nav>
      <div onClick={() => setBar(!bar)} className="bars">
        <div className="bar"></div>
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1152px;
  width: 90%;
  margin: 0 auto;
  /* padding: 1.5rem 0; */
  position: relative;
  animation: header 500ms ease-in-out;

  @media (max-width: 840px) {
    width: 90%;
  }
  .bars {
    display: none;
  }
  @media (max-width: 640px) {
    .bars {
      width: 30px;
      height: 30px;
      position: fixed;
      right: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      z-index: 100;
      .bar {
        width: 100%;
        height: 2px;
        background-color: ${(props) => (props.bar ? "transparent" : "#fff")};
        transition: all 400ms ease-in-out;
        :before,
        :after {
          content: "";

          width: 100%;
          height: 2px;
          background-color: #73a079;
          position: absolute;
        }

        :before {
          transform: ${(props) => (props.bar ? "rotate(45deg)" : "translateY(10px)")};
          transition: all 400ms ease-in-out;
          background-color: #fff;
        }

        :after {
          transform: ${(props) => (props.bar ? "rotate(-45deg)" : "translateY(-10px)")};
          transition: all 400ms ease-in-out;
          background-color: #fff;
        }
      }
    }
  }
`;
const Logo = styled.div`
  gap: 0.5rem;
  z-index: 105;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
    color: black;
  }
`;
const Nav = styled.div`
  @media (max-width: 640px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    background-color: #73a079;
    inset: 0;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    gap: 2rem;
    font-weight: 700;
    height: ${(props) => (props.bar ? "100vh" : 0)};
    transition: height 400ms ease-in-out;
    overflow: hidden;
    z-index: 100;
  }
  span {
    margin-left: 1rem;
    a {
      color: #000000;
      text-decoration: none;
      font-weight: 400;
      position: relative;
      :before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -5px;
        height: 2px;
        background-color: #73a079;
        transform: scale(0);
        transform-origin: right;
        transition: transform 400ms ease-in-out;
      }
      :hover:before {
        transform: scale(1);
        transform-origin: left;
      }
      :hover {
        opacity: 0.7;
      }
    }
  }
`;
