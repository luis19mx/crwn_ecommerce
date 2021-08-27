import { Component } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, SignInWithGoogle } from '../../firebase'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'

import './sign-in.styles.scss'

export default class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = { email: '', password: '' }
  }
  handleSubmit = async (evt) => {
    evt.preventDefault()
    const { email, password } = this.state
    try {
      await signInWithEmailAndPassword(auth, email, password)
      this.setState({ email: '', password: '' })
    } catch (error) {
      console.error(error.stack)
    }

  }
  handleChange = (evt) => {
    const { name, value } = evt.target
    this.setState({ [name]: value })
  }
  render() {
    return (
      <div className="signin">
        <h2 className="signin__title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            onChange={this.handleChange}
            label="Email"
            type="email"
            name="email"
            value={this.state.email}
            required
          />
          <FormInput
            onChange={this.handleChange}
            label="Password"
            type="password"
            name="password"
            value={this.state.password}
            required
          />
          <div className="signin__submit">
            <Button type="submit">Sign In</Button>
            <Button type="button" onClick={SignInWithGoogle} isBlue>
              Sign In With Google
            </Button>
          </div>
        </form>
      </div>
    )
  }
}
