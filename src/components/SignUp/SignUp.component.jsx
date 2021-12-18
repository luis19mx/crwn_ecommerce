import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { signUpStart } from '../../store/user/user.actions';
import FormInput from '../FormInput';
import Button from '../Button';
import {
  SignInStyles,
  SubmitStyles,
  TitleStyles,
} from '../SignStyles';

const INITSTATE = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export default function SignUp() {
  const dispatch = useDispatch();

  const dispatchSignUpStart = (userCredentials) => {
    dispatch(signUpStart(userCredentials));
  };

  const [userCredentials, setUserCredentials] = useState({ ...INITSTATE });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (password !== confirmPassword) {
      return alert('passwords do not match');
    }
    try {
      dispatchSignUpStart({ email, password, displayName });
    } catch (error) {
      console.error(error.stack);
    } finally {
      setUserCredentials({ ...INITSTATE });
    }
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInStyles>
      <TitleStyles>I don't have an account</TitleStyles>
      <span>Sign Up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          onChange={handleChange}
          label="Display Name"
          type="text"
          name="displayName"
          value={displayName}
          required
        />
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
        <FormInput
          onChange={handleChange}
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          autoComplete="on"
          required
        />
        <SubmitStyles>
          <Button type="submit">Sign Up</Button>
        </SubmitStyles>
      </form>
    </SignInStyles>
  );
}
