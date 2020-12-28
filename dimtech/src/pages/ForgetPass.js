import React from 'react';
import Welcome from './container/Welcome'
import ForgottenPass from '../pages/container/ForgottenPass'
import "../style/Home.css"

class ForgetPass extends React.Component {

  render() {
    return (<div className="Landing">
      <Welcome />
      <ForgottenPass />
    </div>
    )
  }
}
export default ForgetPass