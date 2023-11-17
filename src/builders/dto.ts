import fs from 'fs';
import table from '../table';

export default function buildDto() {
  const { entity, columns } = table;

  let fileString = `\
export default interface ICreate${entity}DTO {
`;

  columns.forEach(c => {
    fileString += `  ${c.name}: ${c.jsType};\n`;
  });

  fileString += `}
`;

  fs.writeFileSync(`generated_files/dtos/ICreate${entity}DTO.ts`, fileString);
}
