import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';
import FormInput from '../FormInput';
import Button from '../Button';
import './sign-in.styles.scss';

const INITSTATE = {
  email: '',
  password: '',
  authError: '',
  disableForm: false,
};

export default function SignIn() {
  const dispatch = useDispatch();

  const dispatchGoogleSignInStart = () => dispatch(googleSignInStart());

  const dispatchEmailSignInStart = (email, password) => {
    dispatch(emailSignInStart({ email, password }));
  };

  const [userCredentials, setUserCredentials] = useState({ ...INITSTATE });

  const { email, password, authError, disableForm } = userCredentials;

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    setUserCredentials({ ...userCredentials, disableForm: true });

    dispatchEmailSignInStart(email, password);
    setUserCredentials({ ...INITSTATE });
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setUserCredentials({ ...userCredentials, [name]: value, authError: '' });
  };

  return (
    <div className="signin">
      <h2 className="signin__title">I already have an account</h2>
      <span>Sign in with your email and password</span>
      {authError && <span>Wrong credentials</span>}

      <form onSubmit={handleSubmit}>
        <FormInput
          onChange={handleChange}
          label="Email"
          type="email"
          name="email"
          value={email}
          required
        />
        <FormInput
          onChange={handleChange}
          label="Password"
          type="password"
          name="password"
          value={password}
          autoComplete="on"
          required
        />
        <div className="signin__submit">
          <Button disable={disableForm.toString()} type="submit">
            Sign In
          </Button>
          <Button
            disable={disableForm.toString()}
            type="button"
            onClick={dispatchGoogleSignInStart}
            isBlue
          >
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
}
