import React from 'react';
import "../style/Home.css"
import Title from '../Components/Title'
import Logo2 from '../Components/Logo2'
import Loremipsum from '../Components/Loremipsum'
import Step2 from './container/Step2'

export default function Signup2() {

  return (<div className="Landing">
    <div className="LeftSide2">
      <Logo2 />
      <div className="Welcome2">
        <Title name="Why we need this information ?" />
        <Loremipsum />
      </div>
    </div>
    <Step2 />
  </div>
  )
}