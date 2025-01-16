import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import { container } from 'tsyringe';
import { CreateUserController } from '@users/useCases/createUser/CreateUserController';

const usersRouter = Router();
const createUsersController = container.resolve(CreateUserController);

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
      isAdmin: Joi.boolean().required,
      role: Joi.string().uuid().required(),
    }),
  }),
  (request, response) => {
    return createUsersController.handle(request, response);
  },
);

export { usersRouter };
