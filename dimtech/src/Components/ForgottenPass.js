import React from 'react';
import { Link } from 'react-router-dom'
import Button from '../Components/Button.js'
import "../style/ForgottenPass.css"

const Welcome = ({ user }) => {
  // This is a dumb "stateless" component
  return (
    // <div>
    //   Welcome <strong>{user.username}</strong>
    //   <a href="javascript:;" onClick={onSignOut}>Sign out</a>
    // </div>


    <div className="Instruction">

      <div className="InlineElement">
        <div className="sentEmail">An e-mail has been sent <strong>{user.username}</strong> to reset your password.</div>

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
class LoginForm extends React.Component {

  // Using a class based component here because we're accessing DOM refs

  handleSignIn(e) {
    e.preventDefault()
    let username = this.refs.username.value

    this.props.onSignIn(username)
  }

  render() {
    return (

      <div>
        <div className="Instruction">Please enter your e-mail to reset your password</div>
        <div className='Form-login-container'>
          <form onSubmit={this.handleSignIn.bind(this)} className="Form-login">
            <input className='Form-input-login' type="email" name="email" placeholder="E-mail" ref="username" />
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

class ForgottenPass extends React.Component {
  constructor(props) {
    super(props)
    // the initial application state
    this.state = {
      user: null
    }
  }

  // App "actions" (functions that modify state)
  signIn(username) {
    // This is where you would call Firebase, an API etc...
    // calling setState will re-render the entire app (efficiently!)
    this.setState({
      user: {
        username,

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
            <Welcome user={this.state.user} />
            :
            <LoginForm onSignIn={this.signIn.bind(this)} />
        }
      </div>
    )
  }
}
export default ForgottenPass;
