import React from 'react';
import Welcome from '../Components/Welcome'
import ForgottenPass from '../Components/ForgottenPass'
import "../style/Home.css"

class Home extends React.Component {

  render() {
    return (<div className="Landing">
      <Welcome />
      <ForgottenPass />
    </div>
    )
  }
}
export default Home