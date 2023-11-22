import { Router } from 'express';
import OrdersController from '@modules/commercial/infra/http/controllers/OrdersController';
import { celebrate, Joi, Segments } from 'celebrate';

const ordersRouter = Router();
const ordersController = new OrdersController();

ordersRouter.get('/', ordersController.list, () => {
  /*
      #swagger.path = '/commercial/orders'
      #swagger.tags = ['Order']
      #swagger.description = "List all orders"
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

ordersRouter.get(
  '/view/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().integer().required(),
    },
  }),
  ordersController.get,
  () => {
    /*
      #swagger.path = '/commercial/orders/view/{id}'
      #swagger.tags = ['Order']
      #swagger.description = "View order"
      #swagger.security = [{
        "bearerAuth": []
      }]
      #swagger.responses[401] = {
        description: "Unauthorized"
      }
      #swagger.responses[404] = {
        description: "Not found order"
      }
      #swagger.responses[200] = {
        description: "OK",
      }
   */
  },
);

ordersRouter.post('/create', ordersController.create, () => {
  /*
      #swagger.path = '/commercial/orders/create'
      #swagger.tags = ['Order']
      #swagger.description = "Create order"
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
                        "$ref": "#/components/schemas/Order"
                       },
                  }
              }
          }
    } */
});
ordersRouter.put('/update/:id', ordersController.update, () => {
  /*
      #swagger.path = '/commercial/orders/update/{id}'
      #swagger.tags = ['Order']
      #swagger.description = "Update order"
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
                        "$ref": "#/components/schemas/Order"
                       },
                  }
              }
          }
    } */
});

ordersRouter.delete(
  '/delete/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().integer().required(),
    },
  }),
  ordersController.delete,
  () => {
    /*
      #swagger.path = '/commercial/orders/delete/{id}'
      #swagger.tags = ['Order']
      #swagger.description = "Delete order"
      #swagger.security = [{
      "bearerAuth": []
      }]
      #swagger.responses[401] = {
        description: "Unauthorized"
      }
      #swagger.responses[404] = {
        description: "Not found order"
      }
      #swagger.responses[204] = {
        description: "No Content",
      }
    */
  },
);

export default ordersRouter;
