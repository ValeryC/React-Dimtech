import React from 'react';
import Welcome from '../pages/container/Welcome'
import Signin from '../pages/container/Signin'
import "../style/Home.css"

class Home extends React.Component {

  render() {
    return (<div className="Landing">
      <Welcome />
      <Signin />
    </div>
    )
  }
}
export default Home

