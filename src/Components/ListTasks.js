import { useState } from "react";
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
  console.log(props.list);
  const [inputDisability, setInputDisability] = useState(true);

  const handleClick = () => {
    setInputDisability(inputDisability ? false : true);
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
          disabled={inputDisability}
        />
        <Icon
          src={inputDisability === true ? pencilIcon : tickIcon}
          alt="pencil-icon"
          onClick={handleClick}
          id={i}
        />
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
