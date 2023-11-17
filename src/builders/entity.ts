import fs from 'fs';
import table from '../table';

export default function buildEntity() {
  const { entity, name, columns, relations, entityCamel } = table;

  let fileString = `\
import { MainEntity } from '@shared/infra/typeorm/entities/MainEntity';
import { Entity, Column } from 'typeorm';

@Entity({ name: '${name}' })
class ${entity} {
`;
  columns.forEach(c => {
    fileString += `\
  @Column()
  ${c.name}: ${c.jsType};

`;
  });

  relations?.forEach(r => {
    if (r.type === 'ManyToOne') {
      fileString += `\
  @ManyToOne(() => ${
    r.entity
  }, ${r.entity.toLowerCase()} => ${r.entity.toLowerCase()}.${entityCamel})
  @JoinColumn({ name: '${r.column}' })
  ${r.columnNameInEntity}?: ${r.entity};
`;
    } else if (r.type == 'OneToMany') {
      fileString += `\
  @OneToMany(() => ${
    r.entity
  }, ${r.entity.toLowerCase()} =>   ${r.entity.toLowerCase()}.${entityCamel})
  ${r.columnNameInEntity}?: ${r.entity}[];
`;
    }
  });

  fileString += `}
  
export default ${entity};
`;

  fs.writeFileSync(
    `generated_files/infra/typeorm/entities/${entity}.ts`,
    fileString,
  );
}