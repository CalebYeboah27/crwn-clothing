import React from 'react'
import {
  auth,
  creatUserProfileDocument,
  firestore,
} from '../../firebase/firebase.utils'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'

import './sign-up.styles.scss'

class SignUp extends React.Component {
  constructor() {
    super()

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
      errorMessage: '',
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const { displayName, email, password, confirmPassword } = this.state

    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )

      await creatUserProfileDocument(user, { displayName, photoURL: '' })

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
    } catch (error) {
      const message =
        'Firebase: The email address is already in use by another account. (auth/email-already-in-use).'
      const code = error.code
      if (error.message === message) {
        this.setState({
          errorMessage: 'This account already exists',
        })
      } else if (code === 'auth/weak-password') {
        this.setState({
          errorMessage: 'The password is too weak, please try again',
        })
      }
    }
  }

  handleChange = (event) => {
    event.preventDefault()

    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account </h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          {this.state.errorMessage ? (
            <h4 style={{ color: 'red' }}>{this.state.errorMessage}</h4>
          ) : null}
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp
