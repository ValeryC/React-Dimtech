import React from 'react';
import "../style/Home.css"
import Disclaimer from '../pages/container/Disclaimer'
import Step1 from './container/Step1'


class Signup extends React.Component {
  render() {
    return (<div className="Landing">
      <Disclaimer />
      <Step1 />
    </div>
    )
  }
}
export default Signup