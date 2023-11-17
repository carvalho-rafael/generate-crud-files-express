import fs from 'fs';
import table from '../table';

export default function buildSwagger() {
  const { entity, columns } = table;

  let fileString = `\
${entity}: {
`;

  columns.forEach(c => {
    let value;
    switch (c.jsType) {
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

  fs.writeFileSync(`generated_files/swagger.ts`, fileString);
}
