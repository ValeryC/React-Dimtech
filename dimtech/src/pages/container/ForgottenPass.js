import React from 'react';
import { Link } from 'react-router-dom'
import Button from '../../Components/Button.js'
import "../../style/ForgottenPass.css"

//This file contains 3 components. Sent, Email , ForgottenPass(main) 

const Sent = ({ user }) => {
  return (
    <div className="Instruction">
      <div className="InlineElement">
        <div className="sentEmail">An e-mail has been sent <strong>{user.mail}</strong> to reset your password.</div>
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

class Email extends React.Component {
  handleSignIn(e) {
    e.preventDefault()
    let mail = this.refs.mail.value
    this.props.onSignIn(mail)
  }
  render() {
    return (
      <div>
        <div className="Instruction">Please enter your e-mail to reset your password</div>
        <div className='Form-login-container'>
          <form onSubmit={this.handleSignIn.bind(this)} className="Form-login">
            <input className='Form-input-login' type="email" name="email" placeholder="E-mail" ref="mail" required />
            <div className="Button">
              <Button label="Send" />
              <div className="Cancel"> <Link to={"/"}>Cancel</Link></div>
            </div>
          </form>
        </div>
      </div>
    )
  }
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

  valid(mail) {
    this.setState({
      user: {
        mail,
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
            <Sent user={this.state.user} />
            :
            //rendering component Email first cause user != null 
            <Email onSignIn={this.valid.bind(this)} />
        }
      </div>
    )
  }
}
export default ForgottenPass;
