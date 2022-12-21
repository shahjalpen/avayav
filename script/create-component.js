const fs = require('fs');
const templates = require('./templates');

const componentMeta = process.argv[2];

if (!componentMeta) {
  console.error('Please supply a valid component name');
  process.exit(1);
}

const componentPath = componentMeta.substring(
  0,
  componentMeta.lastIndexOf('/')
);
const componentName = componentMeta.substring(
  componentMeta.lastIndexOf('/') + 1,
  componentMeta.length
);

console.log('Creating Component Templates with name: ' + componentMeta);

const componentDirectory = `./src/${componentPath}/${componentName}`;

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${componentName} already exists.`);
  process.exit(1);
}

fs.mkdirSync(componentDirectory, { recursive: true });

const generatedTemplates = templates.map((template) => template(componentName));

generatedTemplates.forEach((template) => {
  fs.writeFileSync(
    `${componentDirectory}/${
      template.type !== undefined && template.type === 'root'
        ? 'index'
        : componentName
    }${template.extension}`,
    template.content
  );
});

console.log('Successfully created component under: ' + componentDirectory);
