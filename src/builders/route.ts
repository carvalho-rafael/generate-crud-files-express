import fs from 'fs';
import table from '../table';

export default function buildRoute() {
  const {
    entity,
    entityPlural,
    module,
    entityCamel,
    entityPluralCamel,
    cache,
    cacheList,
  } = table;

  let fileString = `\
import { Router } from 'express';
import ${entityPlural}Controller from '@modules/${module}/infra/http/controllers/${entityPlural}Controller';
import { celebrate, Joi, Segments } from 'celebrate';

const ${entityPluralCamel}Router = Router();
const ${entityPluralCamel}Controller = new ${entityPlural}Controller();

${entityPluralCamel}Router.get('/', ${entityPluralCamel}Controller.list, () => {
  /*
      #swagger.path = '/${module}/${entityPluralCamel}'
      #swagger.tags = ['${entity}']
      #swagger.description = "List all ${entityPluralCamel}"
      #swagger.security = [{
        "bearerAuth": []
      }]
      #swagger.responses[401] = {
        description: "Unauthorized"
      }
      #swagger.responses[200] = {
        description: "OK",
      }
   */
});

${entityPluralCamel}Router.get(
  '/view/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().integer().required(),
    },
  }),
  ${entityPluralCamel}Controller.get,
  () => {
    /*
      #swagger.path = '/${module}/${entityPluralCamel}/view/{id}'
      #swagger.tags = ['${entity}']
      #swagger.description = "View ${entityCamel}"
      #swagger.security = [{
        "bearerAuth": []
      }]
      #swagger.responses[401] = {
        description: "Unauthorized"
      }
      #swagger.responses[404] = {
        description: "Not found ${entityCamel}"
      }
      #swagger.responses[200] = {
        description: "OK",
      }
   */
  },
);

${entityPluralCamel}Router.post('/create', ${entityPluralCamel}Controller.create, () => {
  /*
      #swagger.path = '/${module}/${entityPluralCamel}/create'
      #swagger.tags = ['${entity}']
      #swagger.description = "Create ${entityCamel}"
            #swagger.security = [{
      "bearerAuth": []
      }]
      #swagger.responses[401] = {
        description: "Unauthorized"
      }
      #swagger.responses[404] = {
        description: "Bad request"
      }
      #swagger.responses[200] = {
        description: "OK",
      }
      #swagger.requestBody = {
              required: true,
              content: {
                  "application/json": {
                      schema: {
                        "$ref": "#/components/schemas/${entity}"
                       },
                  }
              }
          }
    } */
});
${entityPluralCamel}Router.put('/update/:id', ${entityPluralCamel}Controller.update, () => {
  /*
      #swagger.path = '/${module}/${entityPluralCamel}/update/{id}'
      #swagger.tags = ['${entity}']
      #swagger.description = "Update ${entityCamel}"
            #swagger.security = [{
      "bearerAuth": []
      }]
      #swagger.responses[401] = {
        description: "Unauthorized"
      }
      #swagger.responses[404] = {
        description: "Bad request"
      }
      #swagger.responses[200] = {
        description: "OK",
      }
      #swagger.requestBody = {
              required: true,
              content: {
                  "application/json": {
                      schema: {
                        "$ref": "#/components/schemas/${entity}"
                       },
                  }
              }
          }
    } */
});

${entityPluralCamel}Router.delete(
  '/delete/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().integer().required(),
    },
  }),
  ${entityPluralCamel}Controller.delete,
  () => {
    /*
      #swagger.path = '/${module}/${entityPluralCamel}/delete/{id}'
      #swagger.tags = ['${entity}']
      #swagger.description = "Delete ${entityCamel}"
      #swagger.security = [{
      "bearerAuth": []
      }]
      #swagger.responses[401] = {
        description: "Unauthorized"
      }
      #swagger.responses[404] = {
        description: "Not found ${entityCamel}"
      }
      #swagger.responses[204] = {
        description: "No Content",
      }
    */
  },
);

export default ${entityPluralCamel}Router;
`;

  fs.writeFileSync(
    `generated_files/infra/http/routes/${entityPluralCamel}.routes.ts`,
    fileString,
  );
}
