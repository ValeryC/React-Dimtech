import React, { useRef, useState } from 'react';
import user from '../assets/user.svg'
import "../style/ProfileUser.css";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from 'react-router-dom'

export default function ProfileUser() {

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  const [showText] = useState(false);
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
    <div className="menu-container">
      <button onClick={onClick} className="menu-trigger">
        <span>  {showText && <div className="mail-user">{currentUser.email}</div>}
          {currentUser.email}</span>
        <img src={user} alt="User avatar" className="App-avatar" height='30px' width='30px' />
        {error && <div className="error">{error}</div>}
      </button>
      <nav ref={dropdownRef} className={`menu ${isActive ? "active" : "inactive"}`}>
        <ul>
          <li>
            <Link to="/Settings" className="update"><div>Update profile</div> </Link>
          </li>
          <li>
            <Link to='/' variant="link" onClick={handleLogout}><div>Log-out</div></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

