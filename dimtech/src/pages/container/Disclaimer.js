import React from 'react';
import "../container/style/Disclaimer.css"
import Logo2 from '../../Components/Logo2'
import Loremipsum from '../../Components/Loremipsum'
import Title from '../../Components/Title'

export default function Disclaimer() {
  return (
    <div className="LeftSide2">
      <Logo2 />
      <div className="Welcome2">
        <Title name="Disclaimer risk" />
        <Loremipsum />
      </div>
    </div>
  )
}
