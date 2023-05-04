import styled from "styled-components";
import Header from "./components/Banner/Header";
import SideBar from "./components/Banner/sidebar";
import Mainbanner from "./components/Banner/Mainbanner";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import Portfolio from "./components/projects/projects";
import Introduce from "./components/Introduce/introduce";

function App() {
  return (
    <>
      <Container>
        <SideBar />
        <Banner>
          <Header />
          <Mainbanner />
        </Banner>
        <Introduce />
        <LightColor>
          <Portfolio />
        </LightColor>
        <Skills />
        <LightColor>
          <Footer />
        </LightColor>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div``;

const Banner = styled.div`
  background-image: url(https://vault.uicore.co/email-marketing/wp-content/uploads/sites/2/2022/05/Mails-Hero-BG-Image.webp);
  background-position: top right;
  background-repeat: no-repeat;
  background-size: 40% auto;
  opacity: 1;
  transition: 0.3s, border-radius 0.3s, opacity 0.3s;
  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
    background-size: 100%;
  }
`;

const LightColor = styled.div`
  background: #ffffff;
`;
