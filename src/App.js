import styled from "styled-components";
import Header from "./components/Banner/Header";
import SideBar from "./components/Banner/sidebar";
import ProfComponent from "./components/Banner/ProfComponent";
import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
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
          <Projects />
        </LightColor>
        <Clients />
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
  background: #f0ead6;
  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const LightColor = styled.div`
  background: #f0ead6;
`;
