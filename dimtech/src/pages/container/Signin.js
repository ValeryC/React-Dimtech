import React, { useRef, useState } from "react";
import LinkSignUpConnect from '../../Components/LinkSignUpConnect'
import LinkToForgetPass from '../../Components/LinkToForgetPass'
import Button from '../../Components/Button'
import { useAuth } from '../../contexts/AuthContext'
import "../../style/Signin.css"
import { useHistory } from 'react-router-dom'

export default function Signin() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const { signin } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      await signin(emailRef.current.value, passwordRef.current.value)
      console.log('you are loged')
      history.push('/Dashboard')
    } catch{
      setError('Failed to sign in')
    }
    setLoading(false)
  }

  return (
    <div className="Form">
      <div className="Sign-in">
        {error && <div className="error">{error}</div>}
        Sign-in
        </div>
      <div className='Form-login-container'>
        <form className="Form-login" onSubmit={handleSubmit} >
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
            <Button disabled={loading} label="Login" type="submit" />
          </div>
        </form>
      </div>
      <div className='Link-signup-connect'>
        <LinkSignUpConnect text1='Need an account ?' text2='Sign Up' linkRoute='/Signup' />
      </div>
    </div>
  )
}


