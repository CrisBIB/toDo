import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

const Main = styled.main`
  background: #24a197;
  color: white;
  height: 80vh;
  padding: 20px;
`;

const App = () => {
  return (
    <div>
      <Header />
      <Main></Main>
      <Footer />
    </div>
  );
};

export default App;
