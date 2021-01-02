import React, { useState } from 'react'
import { db } from '../../../firebase'
import Sidebar from '../Sidebar'
import './style/Contact.css'
import Button from '../../../Components/Button'


const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [object, setObject] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('contacts')
      .add({
        name: name,
        email: email,
        object: object,
        message: message,
      })
      .then(() => {
        alert('Message has been submitted 👍')
      })
      .catch((error) => {
        alert(error.message)
      })

  }

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
            <form className="form-contact" onSubmit={handleSubmit}>
              <label>Name</label>
              <input className="input-class" placeholder="Name"
                value={name} onChange={(e) => setName(e.target.value)} />
              <label>E-mail adress</label>
              <input className="input-class" placeholder="E-mail adress"
                value={email} onChange={(e) => setEmail(e.target.value)}
              />
              <label>Object</label>
              <input className="input-class" placeholder="Object"
                value={object} onChange={(e) => setObject(e.target.value)} />
              <label>Message</label>
              <textarea className="input-message" placeholder="Message"
                value={message} onChange={(e) => setMessage(e.target.value)} />
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

export default Contact