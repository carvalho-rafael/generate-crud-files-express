import fs from 'fs';
import table from '../table';

export default function buildDto() {
  const { entity, columns } = table;

  let fileString = `\
export default interface ICreate${entity}DTO {
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
    fileString += `  ${c.name}${c.null ? '?' : ''}: ${jsType};\n`;
  });

  fileString += `}
`;

  fs.writeFileSync(`generated_files/dtos/ICreate${entity}DTO.ts`, fileString);
}
