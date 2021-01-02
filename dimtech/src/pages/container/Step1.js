import React, { useRef, useState } from "react";
import Button from '../../Components/Button'
import StepBar from '../../Components/StepBar'
import './style/Step1.css'
import { useAuth } from '../../contexts/AuthContext'
import { useHistory } from 'react-router-dom'


export default function Step1() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }
    else if (passwordRef.current.value.length < 6) {
      return setError('At least 6 characters')
    }
    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push('/Signup2')
    } catch{
      setError('Failed to create an account: account already exist')
    }
    setLoading(false)
  }

  return (
    <div className="Form2">
      <StepBar />
      <div className='Form-login-container2'>
        {error && <div className="error">{error}</div>}
        <form className="Form-login1" onSubmit={handleSubmit}>
          <input className='Form-input-login2' id="email" type="email" placeholder="E-mail" ref={emailRef} required />
          <input className='Form-input-login2' id="password" type="password" placeholder="Password" ref={passwordRef} required />
          <input className='Form-input-login2' id="password-confirm" type="password" placeholder="Confirm Password" ref={passwordConfirmRef} required />
          {/* this checkbox should probably erase */}
          <div className="Login-element">
            <input className="styled-checkbox" id="styled-checkbox" type="checkbox" value="log" />
            <label className="CheckboxLabel2">Keep me logged</label>
          </div>
          <div className="Button">
            <Button disabled={loading} label="Next" type="submit"></Button>
          </div>
        </form>
      </div>

    </div>
  )
}
