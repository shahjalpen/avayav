import React from "react";
import { render } from "@testing-library/react";

import Avatar from "./Avatar";
import { AvatarProps } from "./Avatar.types";

describe("Avatar Component", () => {
  let props: AvatarProps;

  beforeEach(() => {
    props = {
      text: "primary"
    };
  });

  const renderComponent = () => render(<Avatar {...props} />);

  it("it should render Button text correctly", () => {
    props.text = "test";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Avatar");

    expect(component.innerHTML).toEqual("test");
  });
});
