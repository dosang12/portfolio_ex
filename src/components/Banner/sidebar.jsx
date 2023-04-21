import React, { useState } from "react";
import styled from "styled-components";

const SideBar = () => {
  const [bar, setBar] = useState(false);
  const [homeText, setHomeText] = useState("🏠");
  const [serviceText, setServiceText] = useState("🔧");
  const [projectText, setProjectText] = useState("💻");
  const [clientText, setClientText] = useState("📚");
  const [contactText, setContactText] = useState("📤");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleHomeHover = () => {
    setHomeText("Home");
  };

  const handleHomeLeave = () => {
    setHomeText("🏠");
  };

  const handleServiceHover = () => {
    setServiceText("Service");
  };

  const handleServiceLeave = () => {
    setServiceText("🔧");
  };

  const handleProjectHover = () => {
    setProjectText("Project");
  };

  const handleProjectLeave = () => {
    setProjectText("💻");
  };

  const handleClientHover = () => {
    setClientText("Myskill");
  };

  const handleClientLeave = () => {
    setClientText("📚");
  };

  const handleContactHover = () => {
    setContactText("Contact");
  };

  const handleContactLeave = () => {
    setContactText("📩");
  };

  return (
    <Nav bar={bar}>
      <div className="sidebarnav">
        <div>
          <a href="#home" onMouseEnter={handleHomeHover} onMouseLeave={handleHomeLeave}>
            {homeText}
          </a>
        </div>
        <div>
          <a href="#service" onMouseEnter={handleServiceHover} onMouseLeave={handleServiceLeave}>
            {serviceText}
          </a>
        </div>
        <div>
          <a href="#project" onMouseEnter={handleProjectHover} onMouseLeave={handleProjectLeave}>
            {projectText}
          </a>
        </div>
        <div>
          <a href="#client" onMouseEnter={handleClientHover} onMouseLeave={handleClientLeave}>
            {clientText}
          </a>
        </div>
        <div>
          <a href="#footer" onMouseEnter={handleContactHover} onMouseLeave={handleContactLeave}>
            {contactText}
          </a>
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
  background-color: #ffffffaa;
  border-radius: 10px;

  z-index: 999;
  @media (max-width: 640px) {
    display: none;
  }
  position: fixed;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  .sidebarnav {
    width: 80px;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-di
  }
  div div {
    text-align: center;
  }
  a {
    text-decoration: none;
    display: inline-block;
    width: 100%;
    height: 50px;
    color: #444;
    padding: 15px;
    font-size: 0.8rem;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      background-color: #444;
      color: #fff;
    }
  }
`;
