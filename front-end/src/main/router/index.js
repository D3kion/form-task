import { signupRouter, SIGNUP_ROUTE_PATH } from '../../core/signup';
import { userListRouter, USER_LIST_ROUTE_PATH } from '../../core/user-list';
import { routesInit } from './router.core';

export const routes = {
  [SIGNUP_ROUTE_PATH]: signupRouter,
  [USER_LIST_ROUTE_PATH]: userListRouter,
};

export const Router = routesInit(routes);
