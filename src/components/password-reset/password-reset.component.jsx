import React from 'react'
import { auth } from '../../firebase/firebase.utils'

const Password = () => {
  const [email, setEmail] = useState('')

  resetPassword = (event) => {
    event.preventDefault()

    auth.sendPasswordResetEmail()
  }

  return (
    <div>
      <form onSubmit={this.resetPassword}>
        <FormInput
          name="email"
          type="email"
          value={this.state.email}
          handleChange={this.handleChange}
          label="Email"
          required
        />

        <div className="buttons">
          <CustomButton type="submit">Reset Password</CustomButton>
        </div>
      </form>
    </div>
  )
}

export default PasswordReset
