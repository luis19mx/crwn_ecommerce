import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import { SignStyles } from './SignPage.styles';

export default function SignInSignUpPage() {
  return (
    <SignStyles>
      <SignIn />
      <SignUp />
    </SignStyles>
  );
}
