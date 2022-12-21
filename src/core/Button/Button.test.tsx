import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";
import { ButtonProps } from "./Button.types";

describe("Button Component", () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {
      text: "primary"
    };
  });

  const renderComponent = () => render(<Button {...props} />);

  it("it should render Button text correctly", () => {
    props.text = "test";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Button");

    expect(component.innerHTML).toEqual("test");
  });
});
