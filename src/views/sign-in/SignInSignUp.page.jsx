import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import './sign-in-sign-up.styles.scss';

export default function SignInSignUpPage() {
  return (
    <div className="sign">
      <SignIn />
      <SignUp />
    </div>
  );
}
