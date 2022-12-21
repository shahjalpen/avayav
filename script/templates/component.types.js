module.exports = (componentName) => ({
  content: `export interface ${componentName}Props {
    text: string;
}
`,
  extension: `.types.ts`,
});
