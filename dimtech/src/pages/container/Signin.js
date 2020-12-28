import React from 'react';
import "../../style/Signin.css"
import Button from '../../Components/Button'
import LinkSignUpConnect from '../../Components/LinkSignUpConnect'
import LinkToForgetPass from '../../Components/LinkToForgetPass'

class Signin extends React.Component {

  render() {
    return (
      <div className="Form">
        <div className="Sign-in">
          Sign-in
        </div>
        <div className='Form-login-container'>
          <form className="Form-login" onSubmit={this.HandleSubmit}>
            <input className='Form-input-login' type="email" name="email" placeholder="E-mail" onChange={this.UpdateField} />
            <input className='Form-input-login' type="password" name="password" placeholder="Password" onChange={this.UpdateField} />

            <div className="Login-element">
              <label className="CheckboxLabel">
                <input className="Checkbox" type="checkbox" name="hasAgreed" />
                <span>Keep me logged</span>
              </label>
              <div className="ForgetPass">
                <LinkToForgetPass text='Forget your password?' linkRoute='/ForgetPass' />
              </div>
            </div>
            <div className="Button">
              <Button label="Login" />
            </div>
          </form>
        </div>
        <div className='Link-signup-connect'>
          <LinkSignUpConnect text1='Need an account ?' text2='Sign Up' linkRoute='/Signup' />
        </div>
      </div>
    )
  }
}
export default Signin;
