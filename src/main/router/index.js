import { signupRouter, SIGNUP_ROUTE_PATH } from '../../core/signup';
import { routesInit } from './router.core';

export const routes = {
  [SIGNUP_ROUTE_PATH]: signupRouter,
};

export const Router = routesInit(routes);
