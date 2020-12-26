import React from 'react';
import "../style/Welcome.css"
import Logo from './Logo'
import Button from './Button'
import Loremipsum from './Loremipsum'

class Welcome extends React.Component {

  render() {
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
}
export default Welcome


