import React from 'react'
import Sidebar from '../Sidebar'
import './style/Contact.css'
import Button from '../../../Components/Button'
export default function Contact() {

  return (
    <div className="Main-container">
      <Sidebar />
      <div className="Container-contact">
        <div className="Container-formular">
          <h2 className="title-question">Any question</h2>
          <p className="text-contact">If you have any question about how Dimtech works, of if you just want<br />
            to know more about what we offer, feel free to fill the form below, we<br />
            will get back to you as soon as possible.</p>
          <div className="Container-form">
            <form className="form-contact">
              <label>Name</label>
              <input className="input-class" type="text" name="name" placeholder="Name" />
              <label>E-mail adress</label>
              <input className="input-class" type="mail" name="email" placeholder="E-mail adress" />
              <label>Object</label>
              <input className="input-class" type="text" name="object" placeholder="Object" />
              <label>Message</label>
              <textarea className="input-message" type="textarea" name="textValue" placeholder="Message" />
              <div className="button-send">
                <Button label="Send" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
