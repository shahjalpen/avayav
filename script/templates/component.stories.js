module.exports = (componentName) => ({
  content: `import React from "react";
import ${componentName} from "./${componentName}";

export default {
    title: "${componentName}"
};

export const PrimaryButton = () => <${componentName} text="Primary" />;

export const SecondaryButton = () => <${componentName} text="Secondary" />;
`,
  extension: `.stories.tsx`,
});
