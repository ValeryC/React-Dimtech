import React from 'react';
import "../style/Home.css"
import Title from '../Components/Title'
import Logo2 from '../Components/Logo2'
import Step3 from './container/Step3'

export default function Signup3() {

  return (<div className="Landing2">
    <div className="LeftSide2">
      <Logo2 />
      <div className="Welcome2">
        <Title name="A little bit more about you..." />
      </div>
    </div>
    <Step3 />
  </div>
  )
}
