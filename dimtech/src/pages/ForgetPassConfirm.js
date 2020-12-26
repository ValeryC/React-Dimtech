import React from 'react';
import Welcome from '../Components/Welcome'
import Confirm from '../Components/Confirm'


class ForgetPass extends React.Component {

  render() {
    return (<div className="Landing">
      <Welcome />
      <Confirm />
    </div>
    )
  }
}
export default ForgetPass