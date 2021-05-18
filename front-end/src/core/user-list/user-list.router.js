import { setActivePath } from '../../lib/common/navigation';

import { USER_LIST_ROUTE_PATH } from './user-list.constant';

export function userListRouter(ctx) {
  ctx.store.dispatch(setActivePath(USER_LIST_ROUTE_PATH));
}
