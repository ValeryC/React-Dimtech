import React from 'react';
import "./style/Welcome.css"
import Logo from '../../Components/Logo'
import Button from '../../Components/Button'
import Loremipsum from '../../Components/Loremipsum'

export default function Welcome() {

  return (
    <div className="LeftSide">
      <Logo />
      <div className="Welcome">
        <span>Hi,<br />Welcome on Dimtech.</span>
      </div>
      <Loremipsum />
      <div className="Button">
        <Button label="Learn More" />
      </div>
    </div>
  )

}



