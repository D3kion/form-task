import {
  AuthLayout,
  ContentLayout,
  PageLayout,
} from '../../lib/elements/layout';

import { SignupContainer } from './signup.container';

export function SignupPage() {
  return (
    <ContentLayout>
      <PageLayout>
        <AuthLayout>
          <SignupContainer />
        </AuthLayout>
      </PageLayout>
    </ContentLayout>
  );
}
