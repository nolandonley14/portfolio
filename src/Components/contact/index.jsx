import React, { useState } from 'react'
import { Axios, db } from '../../firebase/firebaseConfig'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ContactForm = () => {
  const [formData, setFormData] = useState({})

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = event => {
    event.preventDefault()
    sendEmail()
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }

  const sendEmail = () => {
    Axios.post(
      'https://us-central1-portfolio-83240.cloudfunctions.net/submit',
      formData
    )
      .then(res => {
        db.collection('emails').add({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date(),
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="vertical-center full-width">
      <Form className="full-width" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="full-name" className="light">Full Name</Form.Label>
          <Form.Control id="full-name" name="name" type="text" value={formData.name || ''} onChange={updateInput} />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="email" className="light">Email</Form.Label>
          <Form.Control id="email" name="email" type="email" value={formData.email || ''} onChange={updateInput} />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="message" className="light">Message</Form.Label>
          <Form.Control id="message" name="message" as="textarea"rows="3" value={formData.message || ''} onChange={updateInput} />
        </Form.Group>
        <Button className="d-inline-block" variant="primary" type="submit">
            Send
        </Button>
      </Form>
    </div>
  )
}

export default ContactForm
