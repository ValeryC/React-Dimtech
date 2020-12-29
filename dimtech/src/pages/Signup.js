import React from 'react';
import "../style/Home.css"
import Disclaimer from '../pages/container/Disclaimer'
import Step1 from './container/Step1'
import { AuthProvider } from '../contexts/AuthContext'

class Signup extends React.Component {
  render() {
    return (<div className="Landing">
      <Disclaimer />
      <AuthProvider>
        <Step1 />
      </AuthProvider>
    </div>
    )
  }
}
export default Signup