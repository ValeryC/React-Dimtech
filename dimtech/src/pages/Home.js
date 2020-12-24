import React from 'react';
import Welcome from '../Components/Welcome'
import Signin from '../Components/Signin'
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

