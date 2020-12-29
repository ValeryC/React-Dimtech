import React, { useRef } from "react";
import LinkSignUpConnect from '../../Components/LinkSignUpConnect'
import LinkToForgetPass from '../../Components/LinkToForgetPass'
import Button from '../../Components/Button'
import "../../style/Signin.css"

export default function Signin() {

  const emailRef = useRef()
  const passwordRef = useRef()

  return (
    <div className="Form">
      <div className="Sign-in">
        Sign-in
        </div>
      <div className='Form-login-container'>
        <form className="Form-login" >
          <input className='Form-input-login' id="email" type="email" placeholder="E-mail" ref={emailRef} required />
          <input className='Form-input-login' id="password" type="password" placeholder="Password" ref={passwordRef} required />

          <div className="align-element">
            <div className="Login-element">
              <input className="styled-checkbox" id="styled-checkbox" type="checkbox" value="login" />
              <label className="CheckboxLabel" for="styled-checkbox"> Keep me logged</label>
            </div>

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


