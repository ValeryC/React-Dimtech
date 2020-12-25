import React from 'react';
import { Link } from 'react-router-dom'
import Button from '../Components/Button.js'
import "../style/ForgottenPass.css"


class ForgettenPass extends React.Component {

  render() {
    return (
      <div className="Form">
        <div className="Forget">
          Forgotten Password
        </div>
        <div className="Instruction">Please enter your e-mail to reset your password</div>
        <div className='Form-login-container'>
          <form className="Form-login" onSubmit={this.HandleSubmit}>
            <input className='Form-input-login' type="email" name="email" placeholder="E-mail" onChange={this.UpdateField} />
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
export default ForgettenPass;
