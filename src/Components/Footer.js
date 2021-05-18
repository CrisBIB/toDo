import styled from "styled-components";
import logoReact from "../Images/react.png";

const Footer = styled.footer`
  width: 100%;
  font-size: 1rem;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const React = styled.img`
  width: 25px;
`;

const FooterApp = () => {
  return (
    <Footer>
      <small>CrisBIB &copy; 2021</small>
      <Container>
        <small>Powered by</small>
        <a href="https://es.reactjs.org/" target="_blank">
          <React src={logoReact} title="Logo React" alt="logo-reactjs" />
        </a>
      </Container>
    </Footer>
  );
};

export default FooterApp;
