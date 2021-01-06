import React, { useRef, useState, useEffect } from "react";
import LinkSignUpConnect from '../../Components/LinkSignUpConnect'
import LinkToForgetPass from '../../Components/LinkToForgetPass'
import Button from '../../Components/Button'
import { useAuth } from '../../contexts/AuthContext'
import "../container/style/Signin.css"
import { useHistory } from 'react-router-dom'

export default function Signin() {

  const [emailInput, setEmailInput] = useState('')
  const emailRef = useRef()
  const passwordRef = useRef()
  const { signin } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function validEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  }

  useEffect(() => {
    document.title = 'Welcome ' + emailInput
  })

  function handleMailChange(e) {
    setEmailInput(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (!validEmail(emailInput)) {
      return setError('Message is not sent! The email address is badly formatted.')
    }
    try {
      setError('')
      setLoading(true)
      await signin(emailRef.current.value, passwordRef.current.value)
      console.log('you are loged')
      history.push('/Dashboard')
    } catch{
      setError('Failed to sign in, sign up ? ')
    }
    setLoading(false)
  }

  return (
    <div className="Form">
      <div className="Sign-in">
        Sign-in
      </div>
      <div className='Form-login-container'>
        <form className="Form-login" onSubmit={handleSubmit} >
          {error && <div className="error">{error}</div>}

          <input className='Form-input-login'
            id="email" type="email"
            placeholder="E-mail"
            ref={emailRef}
            value={emailInput}
            onChange={handleMailChange}
            required />

          <input className='Form-input-login'
            id="password"
            type="password"
            placeholder="Password"
            ref={passwordRef}
            required />

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


