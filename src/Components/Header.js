import toDoListIcon from "../Images/toDoIcon.png";
import styled from "styled-components";

const HeaderApp = styled.header`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 1.5em;
  color: #24a197;
`;
const Image = styled.img`
  width: 9%;
  margin-left: 10px;
`;

const Header = () => {
  return (
    <HeaderApp>
      <Title>To Do List</Title>
      <Image title="Logo Trivialis" src={toDoListIcon} alt="logo_trivialis" />
    </HeaderApp>
  );
};

export default Header;
