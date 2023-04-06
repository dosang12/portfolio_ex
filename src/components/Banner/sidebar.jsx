import React, { useState } from "react";
import styled from "styled-components";

const SideBar = () => {
  const [bar, setBar] = useState(false);
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
      </div>
    </Nav>
  );
};

export default SideBar;

const Nav = styled.div`
  position: relative;
  .sidebarnav {
    position: absolute;
    top: 0;
    right: 0;
    width: 200px;
    background-color: #f0ead6;
    height: 100%;
    display: flex;
    flex-direction: column;
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
const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 200px;
  background-color: #f0ead6;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Menu = styled.div`
  padding: 1rem;
  font-size: 1.2rem;
  cursor: pointer;
`;
