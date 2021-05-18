import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
// import { prettyDOM } from "@testing-library/dom";
import ListTasks from "./ListTasks";

test("renders content", () => {
  const list = ["This is a test"];

  const component = render(<ListTasks list={list} />);

  component.getByDisplayValue("This is a test");
});

test("clicking the icon input toggle its disability state", () => {
  const list = ["This is a test"];
  const input = true ? false : true;

  const mockHandler = jest.fn();

  const component = render(
    <ListTasks list={list} inputDisability={input} handleClick={mockHandler} />
  );

  const icon = component.getByAltText("editIcon");
  fireEvent.click(icon);

  expect(mockHandler).toHaveBeenCalledTimes(1);
});
