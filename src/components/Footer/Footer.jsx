import { useState } from "react";
import styled from "styled-components";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { BsFacebook, BsSlack } from "react-icons/bs";
import { Slide, Zoom, Fade } from "react-awesome-reveal";
// import footImg from "../images/dosang3.png";
import Lottie from "react-lottie";
import Rocket from "../Lottie/code_rocket.json";

function copyToClipboard(data) {
  navigator.clipboard
    .writeText(data)
    .then(() => {
      console.log(`Copied ${data} to clipboard`);
    })
    .catch((error) => {
      console.error(`Error copying ${data} to clipboard: `, error);
    });
}

const Footer = () => {
  const [email, setEmail] = useState("knight2671@gmail.com");
  const [copySuccess, setCopySuccess] = useState(false);
  function copyToClipboard(data) {
    navigator.clipboard
      .writeText(data)
      .then(() => {
        console.log(`Copied ${data} to clipboard`);
        setCopySuccess(true);
        setTimeout(() => {
          setCopySuccess(false);
        }, 1500);
      })
      .catch((error) => {
        console.error(`Error copying ${data} to clipboard: `, error);
      });
  }

  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Rocket,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Container id="footer">
      <Profile>
        <Slide direction="left" delay={1}>
          <h2>Contact me</h2>
        </Slide>
        <div className="address">
          <Slide direction="left">
            <h2>Address:</h2>
          </Slide>
          <Slide direction="left">
            <h3>서울시 노원구 노원로 564.</h3>
          </Slide>
        </div>
        <div className="contactLinks">
          <Slide direction="left">
            <h2>Contact me directly:</h2>
          </Slide>
          <div>
            <Slide direction="left">
              <span>
                <HiOutlineMailOpen />
              </span>
            </Slide>
            <Slide direction="left">
              <a href={`mailto:${email}`}>{email}</a>

              <button onClick={() => copyToClipboard(email)} title={copySuccess ? "Copied!" : "Click to copy"}>
                {copySuccess ? "복사완료!" : "복사"}
              </button>
            </Slide>
          </div>
        </div>
        <div className="profiles">
          <Slide direction="left">
            <p>
              <a href="https://github.com/dosang12" target="_blank">
                깃허브
              </a>
              <a href="https://drive.google.com/file/d/1_3X9uTPsWHT1MbS5hGdBvpG3WSydvPME/view?usp=sharing" target="_blank">
                이력서
              </a><a href="https://drive.google.com/file/d/1UgoMilg4xcNbDlpcHQfj_-1t5owwXSrf/view?usp=sharing" target="_blank">
                경력기술서
              </a>
            </p>
          </Slide>
          <div className="icons">
            <Zoom>
              <span>
                <a href="https://github.com/dosang12" target="_blank">
                  <AiFillGithub />
                </a>
              </span>
            </Zoom>
            {/* <Zoom>
              <span>
                <a href="/" target="_blank">
                  <AiFillLinkedin />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a href="/">
                  <BsFacebook />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a href="/">
                  <BsSlack />
                </a>
              </span>
            </Zoom> */}
          </div>
        </div>
        <Fade>
          <ArrowUp onClick={scrollUp}>
            <AiOutlineArrowUp />
          </ArrowUp>
        </Fade>
      </Profile>
      <Lottie options={defaultOptions} height={350} width={350} />
      {/* <Slide direction="right">
        <img className="footerImg" src={footImg} alt="profile" />
      </Slide> */}
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  margin-top: 2rem;
  position: relative;
  padding: 2rem 0;
  width: 80%;
  max-width: 1152px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
  }
  /* .footerImg {
    width: 400px;
  }
   */
`;
const Profile = styled.div`
  flex: 1;
  .address {
    padding: 1rem 0;
    h2 {
      font-size: 1.2rem;
    }

    p {
      width: 60%;
      padding-top: 0.5rem;
      @media (max-width: 650px) {
        width: 100%;
      }
    }
  }

  .contactLinks {
    h2 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      button {
        padding: 0 10px;
        border-radius: 10px;
        :hover {
          cursor: pointer;
          transition: 0.2s;
          background-color: orange;
        }
      }
      a {
        text-decoration: none;
        color: lightgray;
        :hover {
          transition: 0.5s;
          color: orange;
        }
      }
    }
  }

  .profiles {
    h2 {
      font-size: 1.2rem;
      padding: 1rem 0;
    }
    p {
      a {
        text-decoration: none;
        color: black;
        padding: 5px 30px;
        border: 3px solid black;
        border-radius: 10px;
        display: inline-block;
        margin: 20px 10px 20px 0;
        font-weight: 500;
        :hover {
          background-color: orange;
          font-weight: 600;
          transition: 0.5s;
        }
      }
    }

    .icons {
      display: flex;
      align-items: center;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000;
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
        border-radius: 50px;

        :hover {
          background-color: orange;
        }

        a {
          margin-top: 0.2rem;
          color: #fff;
        }
      }
    }
  }
`;
const ArrowUp = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #c5c6d0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2rem;
  @media (max-width: 650px) {
    position: absolute;
    right: 3rem;
    top: 16rem;
  }
`;
