import { Component } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, createUserDocument } from '../../firebase'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'

import './sign-up.styles.scss'

const initState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export default class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = { ...initState }

    // console.log(auth)
  }
  handleSubmit = async (evt) => {
    evt.preventDefault()

    const { displayName, email, password, confirmPassword } = this.state
    if (password !== confirmPassword) {
      alert('passwords do not match')
      return
    }
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      )
      await createUserDocument(user, { displayName })
      this.setState({ ...initState })
    } catch (error) {
      console.error(error.stack)
    }
  }
  handleChange = (evt) => {
    const { name, value } = evt.target
    this.setState({ [name]: value })
  }
  render() {
    const { displayName, email, password, confirmPassword } = this.state
    return (
      <div className="signup">
        <h2 className="signup__title">I don't have an account</h2>
        <span>Sign Up with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            onChange={this.handleChange}
            label="Display Name"
            type="text"
            name="displayName"
            value={displayName}
            required
          />
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
          <FormInput
            onChange={this.handleChange}
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            required
          />
          <div className="signup__submit">
            <Button type="submit">Sign Up</Button>
          </div>
        </form>
      </div>
    )
  }
}
