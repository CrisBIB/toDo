import pencilIcon from "../Images/pencilIcon.png";
import tickIcon from "../Images/tickIcon2.png";
import styled from "styled-components";
import "../Styles/ListTasks.scss";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-text: center;
  padding: 0;
`;
const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 0;
`;
const Icon = styled.img`
  width: 8%;
  margin-left: 10px;
`;

const ListTasks = (props) => {
  console.log(props);
  const handleClick = () => {
    props.handleClick();
  };

  const handleChange = (ev) => {
    const inputValue = ev.target.value;
    const inputId = ev.target.id;
    props.upDateTask(inputValue, inputId);
  };

  const listItems = props.list.map((item, i) => {
    return (
      <Item key={i}>
        <input
          onChange={handleChange}
          id={i}
          type="text"
          defaultValue={item}
          disabled={props.inputDisability}
        />
        <Icon
          src={props.inputDisability ? pencilIcon : tickIcon}
          alt="editIcon"
          onClick={handleClick}
          id={i}
        />
      </Item>
    );
  });

  return (
    <Container>
      <h3>To do...</h3>
      <ol>{listItems}</ol>
    </Container>
  );
};

export default ListTasks;
