import React from 'react';
import { Link } from 'react-router-dom'
import Button from '../Components/Button.js'
import "../style/Confirm.css"



class ForgettenPass extends React.Component {

  render() {
    return (
      <div className="Form">
        <div className="Forget">
          Forgotten Password
        </div>
        <div className="Instruction">

          <div className="InlineElement">
            <div className="sentEmail">An e-mail has been sent to contact@contact.com to reset your password.</div>

            <div class="round">
              <input type="checkbox" id="checkbox" checked />
              <label for="checkbox"></label>
            </div>
          </div>

          <div className="Button">
            <Link to={"/"}>
              <Button label="Home" />
            </Link>
          </div>

        </div>
      </div>
    )
  }
}
export default ForgettenPass;