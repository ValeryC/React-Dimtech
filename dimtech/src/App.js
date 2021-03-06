import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home"
import ForgetPass from './pages/ForgetPass'
import Signup from './pages/Signup'
import Signup2 from './pages/Signup2'
import Signup3 from './pages/Signup3'
import SignupEnd from './pages/SignupEnd'
import Dashboard from './Components/SideBar/Menu/Dashboard'
import Dashboard2 from './Components/SideBar/Menu/Dashboard2'
import Dashboard3 from './Components/SideBar/Menu/Dashboard3'
import Dashboard4 from './Components/SideBar/Menu/Dashboard4'
import Dashboard5 from './Components/SideBar/Menu/Dashboard5'
import Dashboard6 from './Components/SideBar/Menu/Dashboard6'
import { AuthProvider } from '../src/contexts/AuthContext'
import PrivateRoute from './Components/PrivateRoute'
import Portfolio from './Components/SideBar/Menu/Portfolio'
import OtherServices from './Components/SideBar/Menu/OtherServices'
import Settings from './Components/SideBar/Menu/Settings'
import Contact from './Components/SideBar/Menu/Contact'

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
              <Route exact path="/Signup2" component={Signup2} />
              <Route exact path="/Signup3" component={Signup3} />
              <Route path="/SignupEnd" component={SignupEnd} />
              <PrivateRoute exact path="/Dashboard6" component={Dashboard6} />
              <PrivateRoute exact path="/Dashboard5" component={Dashboard5} />
              <PrivateRoute exact path="/Dashboard4" component={Dashboard4} />
              <PrivateRoute exact path="/Dashboard3" component={Dashboard3} />
              <PrivateRoute exact path="/Dashboard2" component={Dashboard2} />
              <PrivateRoute exact path="/Dashboard" component={Dashboard} />
              <PrivateRoute exact path="/Portfolio" component={Portfolio} />
              <PrivateRoute exact path="/OtherServices" component={OtherServices} />
              <PrivateRoute exact path="/Settings" component={Settings} />
              <PrivateRoute exact path='/Contact' component={Contact} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </div>
  );
}

export default App;