import React, { useEffect } from 'react';
import "../style/Home.css"
import Disclaimer from '../pages/container/Disclaimer'
import Step1 from './container/Step1'

export default function Signup() {

  useEffect(() => {
    document.title = 'Step1'
  })
  return (<div className="Landing">
    <Disclaimer />
    <Step1 />
  </div>
  )
}

