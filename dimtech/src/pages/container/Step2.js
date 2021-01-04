import React from 'react';
import { useForm } from "react-hook-form";
import './style/Step2.css'
import Button from '../../Components/Button'
import StepBar from '../../Components/StepBar'
import Avatar from '../../Components/Avatar'
import Upload from '../../Components/Upload'
import { Step2Month, Step2Day, Step2Year, Step2Countries, Step2Ind } from './data/Step2data'
import { Link } from 'react-router-dom'

export default function Step2() {

  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    JSON.stringify(data)
    console.log(data)
  };

  return (
    <div className="Form2">
      <StepBar />
      <div className='Form-login-container3'>
        <form className="Form-login2" onSubmit={handleSubmit(onSubmit)} >
          <div className="form-login-info">
            <input className='Form-input-login2' type="" name="Firstname" placeholder="Firstname" ref={register} required />
            <input className='Form-input-login2' type="" name="Lastname" placeholder="Lastname" ref={register} required />
            <div className="title">Date of Birth</div>
            <div className="select-element">

              <select name="month" className="date" ref={register}>
                {Step2Month.map((item, index) => {
                  return (
                    <option key={index} value={item.month}>{item.month}</option>
                  )
                })}
              </select>

              <select name="day" className="date" ref={register}>
                {Step2Day.map((item, index) => {
                  return (
                    <option key={index} value={item.day}>{item.day}</option>
                  )
                })}
              </select>

              <select name="year" className="date" ref={register}>
                {Step2Year.map((item, index) => {
                  return (
                    <option key={index} value={item.year}>{item.year}</option>
                  )
                })}

              </select>
            </div>
            <select id="country" name="country" className="form-control" ref={register}>
              {Step2Countries.map((item, index) => {
                return (
                  <option key={index} value={item.country}>{item.country}</option>
                )
              })}
            </select>

            <input className='Form-input-login2' type="" name="Profession" placeholder="Profession" ref={register} required />
            <div className="title">Phone number</div>
            <div className="Phone">
              <select name="countryCode" id="" className="ind" ref={register}>

                {Step2Ind.map((item, index) => {
                  return (
                    <option key={index} value={item.code}>{item.name + ' ' + item.code}</option>
                  )
                })}
              </select>
              <input className='Form-input-number' type="tel" id="phone" name="phone"
                pattern="[0-9]{10,}"
                placeholder="Number"
                ref={register}
                required></input>
            </div>
            <div className="Button">

              <Button label="Next" type="submit" />

            </div>
          </div>

          <div className="container-photo">
            <div className="imageUpload" name="photo" ref={register} >
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

