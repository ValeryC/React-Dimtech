import React from 'react';
import "../style/Welcome.css"
import Logo from './Logo'
import Button from './Button'

class Welcome extends React.Component {

  render() {
    return (
      <div className="LeftSide">
        <Logo />
        <div className="Welcome">
          <span>Hi,<br />Welcome on Dimtech.</span>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit.
      </p>
        <div className="Button">
          <Button label="Learn More" />
        </div>
      </div>
    )
  }
}
export default Welcome


