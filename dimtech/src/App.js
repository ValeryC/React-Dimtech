
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from "./pages/Home"
import ForgetPass from './pages/ForgetPass'
import Signup from './pages/Signup'

class App extends Component {
  render() {
    return (
      <div className="App" >
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/ForgetPass" component={ForgetPass} />
              <Route exact path="/Sign-up" component={Signup} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;