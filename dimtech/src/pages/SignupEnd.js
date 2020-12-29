import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../Components/Logo'
import Loremipsum from '../Components/Loremipsum'
import Button from '../Components/Button'

import '../style/SignupEnd.css'


class SignupEnd extends React.Component {
  render() {
    return (
      <div className="Landing">
        <div className="LeftSide">
          <Logo />
          <div className="space"></div>
          <div className="Container-text">
            <span>What we offer</span>
            <Loremipsum />
          </div>
          <div className="Container-text">
            <span>How to Upgrade ?</span>
            <Loremipsum />
          </div>
        </div>
        <div className="rightpart">
          <div className="Sign-in">
            Ready to start ?
          </div>
          <div className="buttongo">
            <Link to={"/"}><Button label="Go" /></Link>
          </div>
        </div>
      </div>
    )
  }
}
export default SignupEnd