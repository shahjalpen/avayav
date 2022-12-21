module.exports = (componentName) => ({
  content: `import React from "react";

import { ${componentName}Props } from "./${componentName}.types";

import "./${componentName}.css";

const ${componentName}: React.FC<${componentName}Props> = ({ text }) => (
    <div data-testid="${componentName}" className="button">{text}</div>
);

export default ${componentName};

`,
  extension: `.tsx`,
});
