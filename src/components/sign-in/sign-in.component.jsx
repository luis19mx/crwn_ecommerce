import { Component } from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'

export default class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }
  handleSubmit(evt) {
    evt.preventDefault()
    this.setState({ email: '', password: '' })
  }
  handleChange(evt) {
    const { name, value } = evt
    // this.setState({ [name]: value })
  }
  render() {
    return (
      <div className="signin">
        <h2 className="singin__title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            label="email"
            type="email"
            name="email"
            value={this.state.email}
            required
          />
          <FormInput
            handleChange={this.handleChange}
            label="password"
            type="password"
            name="password"
            value={this.state.password}
            required
          />

          <Button type="submit">Sign In</Button>
        </form>
      </div>
    )
  }
}
