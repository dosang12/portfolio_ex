import React, { useState } from "react";
import styled from "styled-components";

const SideBar = () => {
  const [bar, setBar] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Nav bar={bar}>
      <div className="sidebarnav">
        <div>
          <a href="#home">Home</a>
        </div>
        <div>
          <a href="#service">Services</a>
        </div>
        <div>
          <a href="#project">Projects</a>
        </div>
        <div>
          <a href="#client">Testimonials</a>
        </div>
        <div>
          <a href="#footer">Portfolio</a>
        </div>
        <div>
          <a onClick={scrollToTop}>Top</a>
        </div>
      </div>
    </Nav>
  );
};

export default SideBar;

const Nav = styled.div`
  @media (max-width: 640px) {
    display: none;
  }
  position: fixed;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  .sidebarnav {
    width: 150px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  div {
    margin: 15px 0;
  }
  a {
    text-decoration: none;
    color: #444;
    padding: 1rem;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      background-color: #444;
      color: #fff;
    }
  }
`;
