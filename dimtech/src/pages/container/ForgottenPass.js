import React, { useRef, useState } from "react";
import { Link } from 'react-router-dom'
import Button from '../../Components/Button.js'
import "../container/style/ForgottenPass.css"
import { useAuth } from '../../contexts/AuthContext'


//This file contains 3 components. Sent, Email , ForgottenPass(main) 

const Sent = () => {
  const { currentUser } = useAuth()
  return (
    <div className="Instruction">
      <div className="InlineElement">
        <div className="sentEmail">An e-mail has been sent <strong>{currentUser.email}</strong> to reset your password.</div>
        <div class="round">
          <input type="checkbox" id="checkbox" checked />
          <label for="checkbox"></label>
        </div>
      </div>
      <div className="Button">
        <Link to={"/"}>
          <Button label="Home" />
        </Link>
      </div>
    </div>
  )
}
function Email() {
  const { currentUser } = useAuth()
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)


  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage('')
      setError('')
      setLoading(true)
      console.log(currentUser)
      await resetPassword(emailRef.current.value)
      setMessage('An email has been sent to ' + currentUser.email + ' to reset your password')
    } catch{
      setError('Failed to reset password, email not found, or check your mail again')
    }
    setLoading(false)
  }

  return (

    <div>
      <div className="Instruction">Please enter your e-mail to reset your password</div>
      <div className='Form-login-container'>
        {error && <div className="error">{error}</div>}
        {message && <div className="error">{message}</div>}

        <form onSubmit={handleSubmit} className="Form-login">
          <input className='Form-input-login' type="email" placeholder="E-mail" ref={emailRef} required />
          <div className="Button">
            <Button disabled={loading} label="Send" type="submit" />
            <div className="Cancel"> <Link to={"/"}>Cancel</Link></div>
          </div>
        </form>
      </div>
    </div>
  )
}

// This is the main component rendering 2 components : Email and Sent 
class ForgottenPass extends React.Component {
  constructor(props) {
    super(props)
    // the initial application state
    this.state = {
      user: null
    }
  }

  valid(email) {
    this.setState({
      user: {
        email,
      }
    })
  }

  handleSignIn(e) {
    e.preventDefault()
    let email = this.refs.email.value
    this.props.onSignIn(email)
  }

  render() {
    return (
      <div className="Form">
        <div className="Forget">
          Forgotten Password
        </div>
        {
          (this.state.user) ?
            //rendering component Sent first cause user === null
            <Sent />
            :
            //rendering component Email first cause user != null 
            <Email onSignIn={this.valid.bind(this)} />
        }
      </div>
    )
  }
}
export default ForgottenPass;
