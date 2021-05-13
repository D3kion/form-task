import { SignupRouter, SIGNUP_ROUTE_PATH } from '../../core/signup';
import { routesInit } from './router.core';

export const routes = {
  [SIGNUP_ROUTE_PATH]: SignupRouter,
};

export const Router = routesInit(routes);
