import React from 'react';
import Welcome from '../pages/container/Welcome'
import Signin from '../pages/container/Signin'
import "../style/Home.css"

export default function Home() {

  return (
    <div className="Landing">
      <Welcome />
      <Signin />
    </div>
  )
}


