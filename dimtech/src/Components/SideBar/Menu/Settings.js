import React, { useState, useEffect } from 'react'
import Sidebar from '../Sidebar'
import './style/Settings.css'

export default function Settings() {

  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    document.title = 'Settings'
    const id = setInterval(() => setDateTime(new Date()), 1000);
    return () => {
      clearInterval(id);
    }
  })


  return (
    <div className="Main-container">
      <Sidebar />
      <div className="Container-settings">
        <div className="Container-setelement">

          <div className="Container-Profile-info">


            <div className="User-info">

            </div>

            <div className="Avatar">

            </div>

          </div>

          <div className="offers">
            <div className="setTime">
              <h4>{`${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
