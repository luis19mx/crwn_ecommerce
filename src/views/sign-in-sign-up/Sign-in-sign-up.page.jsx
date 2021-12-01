import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-sign-up.styles.scss';

export default function SignInSignUpPage() {
  return (
    <div className="sign">
      <SignIn />
      <SignUp />
    </div>
  );
}
