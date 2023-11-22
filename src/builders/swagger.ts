import fs from 'fs';
import table from '../table';

export default function buildSwagger() {
  const { entity, columns } = table;

  let fileString = `\
${entity}: {
`;

  columns.forEach(c => {
    let jsType;
    if (
      c.type.includes('char') ||
      c.type === 'text' ||
      c.type.includes('ENUM') ||
      c.type.includes('decimal')
    ) {
      jsType = 'string';
    } else if (c.type.includes('date')) {
      jsType = 'date';
    } else if (c.type === 'int') {
      jsType = 'number';
    } else if (c.type === 'boolean') {
      jsType = 'boolean';
    }
    let value;
    switch (jsType) {
      case 'number':
        value = 0;
        break;
      case 'Date':
        value = `'YYYY-MM-DD'`;
        break;
      default:
        value = `''`;
    }
    fileString += `  ${c.name}: ${value},\n`;
  });

  fileString += `},
`;

  fs.writeFileSync(`generated_files_helpers/swagger.ts`, fileString);
}
