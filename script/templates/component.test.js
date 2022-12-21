module.exports = (componentName) => ({
  content: `import React from "react";
import { render } from "@testing-library/react";

import ${componentName} from "./${componentName}";
import { ${componentName}Props } from "./${componentName}.types";

describe("${componentName} Component", () => {
  let props: ${componentName}Props;

  beforeEach(() => {
    props = {
      text: "primary"
    };
  });

  const renderComponent = () => render(<${componentName} {...props} />);

  it("it should render Button text correctly", () => {
    props.text = "test";
    const { getByTestId } = renderComponent();

    const component = getByTestId("${componentName}");

    expect(component.innerHTML).toEqual("test");
  });
});
`,
  extension: `.test.tsx`,
});
