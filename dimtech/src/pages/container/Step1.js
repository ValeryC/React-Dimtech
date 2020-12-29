import React from 'react';
import Button from '../../Components/Button'
import '../../style/Step1.css'
import StepBar from '../../Components/StepBar'

class Step1 extends React.Component {
  render() {
    return (
      <div className="Form2">
        <StepBar />
        <div className='Form-login-container2'>
          <form className="Form-login" onSubmit={this.HandleSubmit}>
            <input className='Form-input-login2' type="email" name="email" placeholder="E-mail" onChange={this.UpdateField} />
            <input className='Form-input-login2' type="password" name="password" placeholder="Password" onChange={this.UpdateField} />
            <input className='Form-input-login2' type="password" name="ConfirmPassword" placeholder="Confirm Password" onChange={this.UpdateField} />
            <div className="Login-element">
              <input className="styled-checkbox" id="styled-checkbox" type="checkbox" value="log" />
              <label className="CheckboxLabel2" for="styled-checkbox">Keep me logged</label>

            </div>
            <div className="Button">
              <Button label="Next" />
            </div>
          </form>
        </div>

      </div>
    )
  }
}
export default Step1