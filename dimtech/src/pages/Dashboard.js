import React, { useState } from 'react';
import Button from '../Components/Button'
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from 'react-router-dom'
import "../style/Dashboard.css"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError('')
    try {
      await logout()
      history.push('/')

    } catch{
      setError('Failed to log out')

    }
  }
  return (
    <div className="Landing">
      <div className="Container-profile">
        {error && <div className="error">{error}</div>}
        <strong>Email:</strong>{currentUser.email}
        <Link to="/update-profile" className="update"><h1>Update profile</h1> </Link>
        <Link to='/'> <Button variant="link" onClick={handleLogout} label="Log-out" /></Link>
      </div>
    </div>
  )
}

