import React from 'react';
import Welcome from './container/Welcome'
import ForgottenPass from '../pages/container/ForgottenPass'
import "../style/Home.css"

export default function ForgetPass() {

  return (
    <div className="Landing">
      <Welcome />
      <ForgottenPass />
    </div>
  )
}
