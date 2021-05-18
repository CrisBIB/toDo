import pencilIcon from "../Images/pencilIcon.png";
import tickIcon from "../Images/tickIcon2.png";
import styled from "styled-components";
import "../Styles/ListTasks.scss";

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
  const listItems = props.list.map((item, i) => {
    return (
      <Item key={i}>
        <input id={i} type="text" defaultValue={item} />
        <Icon src={pencilIcon} alt="pencil-icon" id={i} />
      </Item>
    );
  });

  return (
    <section>
      <h3>To do...</h3>
      <ol>{listItems}</ol>
    </section>
  );
};

export default ListTasks;
