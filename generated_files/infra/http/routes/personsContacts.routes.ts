import { Router } from 'express';
import PersonsContactsController from '@modules/commercial/infra/http/controllers/PersonsContactsController';
import { celebrate, Joi, Segments } from 'celebrate';

const personsContactsRouter = Router();
const personsContactsController = new PersonsContactsController();

personsContactsRouter.get('/', personsContactsController.list, () => {
  /*
      #swagger.path = '/commercial/personsContacts'
      #swagger.tags = ['PersonContact']
      #swagger.description = "List all personsContacts"
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

personsContactsRouter.get(
  '/view/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().integer().required(),
    },
  }),
  personsContactsController.get,
  () => {
    /*
      #swagger.path = '/commercial/personsContacts/view/{id}'
      #swagger.tags = ['PersonContact']
      #swagger.description = "View personContact"
      #swagger.security = [{
        "bearerAuth": []
      }]
      #swagger.responses[401] = {
        description: "Unauthorized"
      }
      #swagger.responses[404] = {
        description: "Not found personContact"
      }
      #swagger.responses[200] = {
        description: "OK",
      }
   */
  },
);

personsContactsRouter.post('/create', personsContactsController.create, () => {
  /*
      #swagger.path = '/commercial/personsContacts/create'
      #swagger.tags = ['PersonContact']
      #swagger.description = "Create personContact"
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
                        "$ref": "#/components/schemas/PersonContact"
                       },
                  }
              }
          }
    } */
});
personsContactsRouter.put('/update/:id', personsContactsController.update, () => {
  /*
      #swagger.path = '/commercial/personsContacts/update/{id}'
      #swagger.tags = ['PersonContact']
      #swagger.description = "Update personContact"
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
                        "$ref": "#/components/schemas/PersonContact"
                       },
                  }
              }
          }
    } */
});

personsContactsRouter.delete(
  '/delete/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().integer().required(),
    },
  }),
  personsContactsController.delete,
  () => {
    /*
      #swagger.path = '/commercial/personsContacts/delete/{id}'
      #swagger.tags = ['PersonContact']
      #swagger.description = "Delete personContact"
      #swagger.security = [{
      "bearerAuth": []
      }]
      #swagger.responses[401] = {
        description: "Unauthorized"
      }
      #swagger.responses[404] = {
        description: "Not found personContact"
      }
      #swagger.responses[204] = {
        description: "No Content",
      }
    */
  },
);

export default personsContactsRouter;
