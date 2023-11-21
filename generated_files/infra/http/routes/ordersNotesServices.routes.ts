import { Router } from 'express';
import OrdersNotesServicesController from '@modules/commercial/infra/http/controllers/OrdersNotesServicesController';
import { celebrate, Joi, Segments } from 'celebrate';

const ordersNotesServicesRouter = Router();
const ordersNotesServicesController = new OrdersNotesServicesController();

ordersNotesServicesRouter.get('/', ordersNotesServicesController.list, () => {
  /*
      #swagger.path = '/commercial/ordersNotesServices'
      #swagger.tags = ['OrderNoteService']
      #swagger.description = "List all ordersNotesServices"
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

ordersNotesServicesRouter.get(
  '/view/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().integer().required(),
    },
  }),
  ordersNotesServicesController.get,
  () => {
    /*
      #swagger.path = '/commercial/ordersNotesServices/view/{id}'
      #swagger.tags = ['OrderNoteService']
      #swagger.description = "View orderNoteService"
      #swagger.security = [{
        "bearerAuth": []
      }]
      #swagger.responses[401] = {
        description: "Unauthorized"
      }
      #swagger.responses[404] = {
        description: "Not found orderNoteService"
      }
      #swagger.responses[200] = {
        description: "OK",
      }
   */
  },
);

ordersNotesServicesRouter.post('/create', ordersNotesServicesController.create, () => {
  /*
      #swagger.path = '/commercial/ordersNotesServices/create'
      #swagger.tags = ['OrderNoteService']
      #swagger.description = "Create orderNoteService"
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
                        "$ref": "#/components/schemas/OrderNoteService"
                       },
                  }
              }
          }
    } */
});
ordersNotesServicesRouter.put('/update/:id', ordersNotesServicesController.update, () => {
  /*
      #swagger.path = '/commercial/ordersNotesServices/update/{id}'
      #swagger.tags = ['OrderNoteService']
      #swagger.description = "Update orderNoteService"
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
                        "$ref": "#/components/schemas/OrderNoteService"
                       },
                  }
              }
          }
    } */
});

ordersNotesServicesRouter.delete(
  '/delete/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().integer().required(),
    },
  }),
  ordersNotesServicesController.delete,
  () => {
    /*
      #swagger.path = '/commercial/ordersNotesServices/delete/{id}'
      #swagger.tags = ['OrderNoteService']
      #swagger.description = "Delete orderNoteService"
      #swagger.security = [{
      "bearerAuth": []
      }]
      #swagger.responses[401] = {
        description: "Unauthorized"
      }
      #swagger.responses[404] = {
        description: "Not found orderNoteService"
      }
      #swagger.responses[204] = {
        description: "No Content",
      }
    */
  },
);

export default ordersNotesServicesRouter;
