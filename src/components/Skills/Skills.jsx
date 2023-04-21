import styled from "styled-components";

const Skills = () => {
  return (
    <Container id="Skills">
      <h2>My Skills</h2>
      <Myskills>
        <div className="skilltree">
          <div className="skillbox">
            <div className="row_first">
              <span>
                MARKUP/STYLING <br />
                LANGUAGE
              </span>
            </div>
            <div className="row_second">HTML CSS</div>
            <div className="row_third">보더</div>
          </div>

          <div className="skillbox">
            <div className="row_first">
              <span>
                CSS
                <br /> FRAMEWORK
              </span>
            </div>
            <div className="row_second">부트스트랩</div>
            <div className="row_third">보더</div>
          </div>
          <div className="skillbox">
            <div className="row_first">
              <span>
                FRONT-END <br />
                LANGUAGE
              </span>
            </div>
            <div className="row_second">자바스크립트</div>
            <div className="row_third">보더</div>
          </div>
          <div className="skillbox">
            <div className="row_first">
              <span>
                JAVASCRIPT
                <br /> FRAMEWORK
              </span>
            </div>
            <div className="row_second">리엑트</div>
            <div className="row_third">보더</div>
          </div>
          <div className="skillbox">
            <div className="row_first">
              <span>
                PACKAGE
                <br /> MANAGER
              </span>
            </div>
            <div className="row_second">NPM</div>
            <div className="row_third">보더</div>
          </div>
          <div className="skillbox">
            <div className="row_first">
              <span>
                DATABASE
                <br /> MANAGEMENT
              </span>
            </div>
            <div className="row_second">MYSQL</div>
            <div className="row_third">보더</div>
          </div>
          <div className="skillbox">
            <div className="row_first">
              <span>
                VERSION <br /> CONTROL
              </span>
            </div>
            <div className="row_second">GIT</div>
            <div className="row_third">보더</div>
          </div>
          <div className="skillbox">
            <div className="row_first">
              <span>
                MS <br />
                OFFICE
              </span>
            </div>
            <div className="row_second">워드 파포 엑셀</div>
            <div className="row_third">보더</div>
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

  @media (max-width: 840px) {
    width: 90%;
  }
`;

const Myskills = styled.div`
  margin: 2rem 0;
  .skilltree {
    display: flex;
    flex-flow: wrap;
    border: 1px solid black;
  }
  .skillbox {
    display: flex;
    flex-direction: column;
    width: 25%;
    padding: 10px;
    @media (max-width: 982px) {
      width: 50%;
    }

    .row_first {
      display: flex;
      justify-content: center;
      span {
        text-align: center;
      }
    }
    .row_second {
      display: flex;
      justify-content: center;

      span {
        text-align: center;
      }
    }
    .row_third {
      display: flex;
      justify-content: center;
      border-bottom: 8px solid brown;
      border-radius: 10px;
      span {
        text-align: center;
      }
    }
  }
`;
