import React, { useState } from "react";
import Header from "./Header";
import ListTasks from "./ListTasks";
import Footer from "./Footer";
import styled from "styled-components";

const Main = styled.main`
  background: #24a197;
  color: white;
  height: 80vh;
  padding: 20px;
`;

const App = () => {
  const [newTask, setNewTask] = useState("");
  const [listTasks, setListTasks] = useState([]);

  const addTask = (ev) => {
    ev.preventDefault();
    if (newTask !== "") {
      setListTasks([...listTasks, newTask]);
      setNewTask("");
    }
  };

  const handleInput = (ev) => {
    ev.preventDefault();
    const textTask = ev.target.value;
    setNewTask(textTask);
  };

  return (
    <div>
      <Header />
      <Main>
        <h2>What to do?</h2>
        <form onSubmit={addTask}>
          <input
            id="input"
            type="text"
            onChange={handleInput}
            placeholder="I have to..."
            value={newTask}
          />
          <button type="submit">OK!</button>
        </form>
        <ListTasks list={listTasks} />
      </Main>
      <Footer />
    </div>
  );
};

export default App;
