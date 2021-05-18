import { UserListLayout, PageLayout } from '../../lib/elements/layout';

import { UserListContainer } from './user-list.container';

export function UserListPage() {
  return (
    <PageLayout>
      <UserListLayout>
        <UserListContainer />
      </UserListLayout>
    </PageLayout>
  );
}
