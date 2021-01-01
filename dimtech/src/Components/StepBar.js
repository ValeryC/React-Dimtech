import React from 'react';
import { Switch, Route } from "react-router-dom";
import "../style/StepBar.css"

// change classname depend of the current path
export default function StepBar() {

  return (
    <div className="Container">
      <ul className="ProgressBar">
        <Switch>
          <Route path="/Signup">
            <li className="Active"></li>
            <li className=""></li>
            <li></li>
          </Route>
          <Route path="/Signup2">
            <li></li>
            <li className="Active"></li>
            <li></li>
          </Route>
          <Route path="/Signup3">
            <li></li>
            <li></li>
            <li className="Active"></li>
          </Route>
        </Switch>
      </ul>
    </div>
  )
}