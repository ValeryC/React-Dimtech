import React from 'react';
import './style/Step2.css'
import Button from '../../Components/Button'
import StepBar from '../../Components/StepBar'
import Avatar from '../../Components/Avatar'
import Upload from '../../Components/Upload'
import { Step2Month, Step2Day, Step2Year, Step2Countries, Step2Ind } from './data/Step2data'
import { Link } from 'react-router-dom'

export default function Step2() {
  return (
    <div className="Form2">
      <StepBar />
      <div className='Form-login-container3'>
        <form className="Form-login2" >
          <div className="form-login-info">
            <input className='Form-input-login2' type="" name="Firstname" placeholder="Firstname" required />
            <input className='Form-input-login2' type="" name="Lastname" placeholder="Lastname" required />
            <div className="title">Date of Birth</div>
            <div className="select-element">

              <select name="month" className="date">
                {Step2Month.map((item, index) => {
                  return (
                    <option key={index} value={item.month}>{item.month}</option>
                  )
                })}
              </select>

              <select name="day" className="date">
                {Step2Day.map((item, index) => {
                  return (
                    <option key={index} value={item.day}>{item.day}</option>
                  )
                })}
              </select>

              <select name="year" className="date">
                {Step2Year.map((item, index) => {
                  return (
                    <option key={index} value={item.year}>{item.year}</option>
                  )
                })}

              </select>
            </div>
            <select id="country" name="country" className="form-control">
              {Step2Countries.map((item, index) => {
                return (
                  <option key={index} value={item.country}>{item.country}</option>
                )
              })}
            </select>

            <input className='Form-input-login2' type="" name="Profession" placeholder="Profession" required />
            <div className="title">Phone number</div>
            <div className="Phone">
              <select name="countryCode" id="" className="ind">
                <option data-countryCode="" value="">Ind</option>
                {Step2Ind.map((item, index) => {
                  return (
                    <option key={index} value={item.code}>{item.name + ' ' + item.code}</option>
                  )
                })}
              </select>
              <input className='Form-input-number' type="tel" id="phone" name="phone"
                pattern="[0-9]{10}"
                placeholder="Number"
                required></input>
            </div>
            <div className="Button">
              <Link to='/Signup3'>
                <Button label="Next" type="submit" /></Link>
            </div>
          </div>

          <div className="container-photo">
            <div className="imageUpload">
              <Avatar />
              <Upload />
              <div className="profile">Profile photo</div>
            </div>
          </div>

        </form>
      </div>
    </div>
  )

}

