import React from 'react';
import "../../style/Disclaimer.css"
import Logo2 from '../../Components/Logo2'
import Loremipsum from '../../Components/Loremipsum'
import Title from '../../Components/Title'

class Disclaimer extends React.Component {

  render() {
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
}
export default Disclaimer;