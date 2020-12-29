import React, { useRef, useState } from "react";
import Button from '../../Components/Button'
import StepBar from '../../Components/StepBar'
import '../../style/Step1.css'
import { useAuth } from '../../contexts/AuthContext'

export default function Step1() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }
    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.curernt.value)
    } catch{
      setError('Failed to create an account')
    }
    setLoading(false)
  }


  return (
    <div className="Form2">
      <StepBar />
      <div className='Form-login-container2'>
        {error && <alert className="error">{error}</alert>}
        <form className="Form-login" onSubmit={handleSubmit}>
          <input className='Form-input-login2' id="email" type="email" placeholder="E-mail" ref={emailRef} required />
          <input className='Form-input-login2' id="password" type="password" placeholder="Password" ref={passwordRef} required />
          <input className='Form-input-login2' id="password-confirm" type="password" placeholder="Confirm Password" ref={passwordConfirmRef} required />
          <div className="Login-element">
            <input className="styled-checkbox" id="styled-checkbox" type="checkbox" value="log" />
            <label className="CheckboxLabel2" for="styled-checkbox">Keep me logged</label>

          </div>
          <div className="Button">
            <Button disabled={loading} label="Next" />
          </div>
        </form>
      </div>

    </div>
  )
}
