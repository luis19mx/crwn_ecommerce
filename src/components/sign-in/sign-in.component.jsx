import { Component } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, SignInWithGoogle } from '../../firebase';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import './sign-in.styles.scss';

const initState = {
  email: '',
  password: '',
  authError: '',
  disableForm: false,
};

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initState };
  }
  handleSubmit = async (evt) => {
    evt.preventDefault();
    this.setState({ disableForm: true });
    const { email, password } = this.state;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      this.setState({ ...initState });
    } catch (error) {
      const {
        groups: { authError },
      } = error.message.match(/\(auth\/(?<authError>.*)\)/);

      if (authError === 'wrong-password' || authError === 'user-not-found')
        return this.setState({
          password: '',
          disableForm: false,
          authError: 'Wrong credentials',
        });

      if (authError === 'too-many-requests')
        return this.setState({
          ...initState,
          authError: `We couldn't process your sign in. Try again later`,
        });

      console.error(error.stack);
    }
  };
  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value, authError: '' });
  };
  render() {
    const { email, password, authError, disableForm } = this.state;
    return (
      <div className="signin">
        <h2 className="signin__title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        {authError && <span>Wrong credentials</span>}

        <form onSubmit={this.handleSubmit}>
          <FormInput
            onChange={this.handleChange}
            label="Email"
            type="email"
            name="email"
            value={email}
            required
          />
          <FormInput
            onChange={this.handleChange}
            label="Password"
            type="password"
            name="password"
            value={password}
            required
          />
          <div className="signin__submit">
            <Button disable={disableForm.toString()} type="submit">
              Sign In
            </Button>
            <Button
              disable={disableForm.toString()}
              type="button"
              onClick={SignInWithGoogle}
              isBlue
            >
              Sign In With Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
