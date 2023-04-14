import styled from "styled-components";
import Header from "./components/Banner/Header";
import SideBar from "./components/Banner/sidebar";
import ProfComponent from "./components/Banner/ProfComponent";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import Portfolio from "./components/projects/projects";
import Services from "./components/Service/Services";

function App() {
  return (
    <>
      <SideBar />
      <Container>
        <SideBar />
        <Banner>
          <Header />
          <ProfComponent />
        </Banner>
        <Services />
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
  background: #ffffff;
  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const LightColor = styled.div`
  background: #ffffff;
`;
