import { Component } from 'react';
import { connect } from 'react-redux';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import './sign-in.styles.scss';

const initState = {
  authError: '',
  disableForm: false,
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initState };
  }
  handleSubmit = async (evt) => {
    evt.preventDefault();
    this.setState({ disableForm: true });
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
    this.setState({ ...initState });
  };
  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value, authError: '' });
  };
  render() {
    const { email, password, authError, disableForm } = this.state;
    const { googleSignInStart } = this.props;
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
              onClick={googleSignInStart}
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

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
