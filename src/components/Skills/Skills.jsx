import styled from "styled-components";
import html from "../images/html.png";
import css from "../images/css.png";
import bootstrap from "../images/bootstrap.png";
import js from "../images/js.png";
import react from "../images/react.png";
import npm from "../images/npm.png";
import sqlite from "../images/sqlite.png";
import git from "../images/git.png";
import powerpoint from "../images/powerpoint.png";
import excel from "../images/excel.png";
import msword from "../images/msword.png";
import { Slide } from "react-awesome-reveal";

const Skills = () => {
  return (
    <Container id="Skills">
      <h2>My Skills</h2>
      <Myskills>
        <div className="skilltree">
          <div className="skillbox">
            <div className="row_first">
              <span>
                Markup/Styling <br />
                Language
              </span>
            </div>
            <div className="row_third">
              <img className="skillicon" src={html} alt="html" />
              <img className="skillicon" src={css} alt="css" />
            </div>
            <div className="row_second">HTML CSS</div>
          </div>

          <div className="skillbox">
            <div className="row_first">
              <span>
                Css
                <br /> Framework
              </span>
            </div>
            <div className="row_third">
              {" "}
              <img className="skillicon" src={bootstrap} alt="bootstrap" />
            </div>
            <div className="row_second">BOOTSTRAP</div>
          </div>
          <div className="skillbox">
            <div className="row_first">
              <span>
                Front-end <br />
                Language
              </span>
            </div>
            <div className="row_third">
              {" "}
              <img className="skillicon" src={js} alt="js" />
            </div>
            <div className="row_second">JAVASCRIPT</div>
          </div>
          <div className="skillbox">
            <div className="row_first">
              <span>
                Javascript
                <br /> Framework
              </span>
            </div>
            <div className="row_third">
              {" "}
              <img className="skillicon" src={react} alt="react" />
            </div>
            <div className="row_second">REACT</div>
          </div>
          <div className="skillbox">
            <div className="row_first">
              <span>
                Package
                <br /> Manager
              </span>
            </div>
            <div className="row_third">
              {" "}
              <img className="skillicon" src={npm} alt="npm" />
            </div>
            <div className="row_second">NPM</div>
          </div>
          <div className="skillbox">
            <div className="row_first">
              <span>
                Database
                <br /> Management
              </span>
            </div>
            <div className="row_third">
              {" "}
              <img className="skillicon" src={sqlite} alt="sqlite" />
            </div>
            <div className="row_second">SQLite</div>
          </div>
          <div className="skillbox">
            <div className="row_first">
              <span>
                Version <br /> Control
              </span>
            </div>
            <div className="row_third">
              <img className="skillicon" src={git} alt="git" />
            </div>
            <div className="row_second">Git</div>
          </div>
          <div className="skillbox">
            <div className="row_first">
              <span>
                MS <br />
                Office
              </span>
            </div>

            <div className="row_third">
              <img className="msskills" src={powerpoint} alt="powerpoint" />
              <img className="msskills" src={excel} alt="excel" />
              <img className="msskills" src={msword} alt="msword" />
            </div>
            <div className="row_second">PPT EXCEL WORD</div>
          </div>
        </div>
      </Myskills>
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  width: 80%;
  max-width: 1152px;
  margin: 0 auto;
  padding: 4rem 0;
  h2 {
    font-size: 36px;
    text-align: center;
  }
  @media (max-width: 840px) {
    width: 90%;
  }
`;

const Myskills = styled.div`
  margin: 5rem 0;
  .skilltree {
    display: flex;
    flex-flow: wrap;
  }
  .skillbox {
    display: flex;
    flex-direction: column;
    width: 25%;
    padding: 10px;
    transition: transform 400ms ease-in-out;
    :hover {
      transform: translateY(-10px);
    }
    @media (max-width: 982px) {
      width: 50%;
    }

    .row_first {
      display: flex;
      justify-content: center;
      span {
        margin-top: 10px;
        color: #1c3f39;
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        padding-bottom: 15px;
      }
    }
    .row_second {
      display: flex;
      justify-content: center;
      padding: 10px;
      font-size: 12px;
      font-weight: 500;
      border-bottom: 8px solid rgb(211, 211, 169);
      margin-bottom: 80px;
      border-radius: 10px;
      @media (max-width: 982px) {
        margin-bottom: 30px;
      }

      span {
        text-align: center;
      }
    }
    .row_third {
      display: flex;
      justify-content: center;

      span {
        text-align: center;
      }
      .skillicon {
        width: 100px;
        padding: 10px;
      }
      .msskills {
        width: 80px;
        height: 100px;
        padding: 10px;
      }
    }
  }
`;
