import styled from "styled-components";

const PageHeader = ({ title, description }) => (
  <>
    <Container>
      <h2 className="pageTitle">{title}</h2>
      <p className="pageDescription">{description}</p>
    </Container>
  </>
);

export default PageHeader;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  h2 {
    padding-bottom: 16px;
    font-size: 24px;
  }
  p {
    padding: 10px 0 20px 0;
  }
`;
