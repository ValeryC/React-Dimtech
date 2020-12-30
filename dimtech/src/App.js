import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from "./pages/Home"
import ForgetPass from './pages/ForgetPass'
import Signup from './pages/Signup'
import Signup2 from './pages/Signup2'
import Signup3 from './pages/Signup3'
import SignupEnd from './pages/SignupEnd'
import Dashboard from './pages/Dashboard';
import { AuthProvider } from '../src/contexts/AuthContext'

function App() {

  return (
    <div className="App" >

      <div>
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/ForgetPass" component={ForgetPass} />
              <Route exact path="/Signup" component={Signup} />
              <Route path="/Signup2" component={Signup2} />
              <Route path="/Signup3" component={Signup3} />
              <Route path="/SignupEnd" component={SignupEnd} />
              <Route exact path="/Dashboard" component={Dashboard} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>

    </div>
  );

}

export default App;