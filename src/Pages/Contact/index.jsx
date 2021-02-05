import React from "react";
import styled from "styled-components/macro";
import "../../Styles/Pages/skills.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Content from '../../Components/content';

const ContactSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 0;
  bottom: 10px;
  z-index: -1;
`

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 10px;
`

const Title = styled.div`
  width: 100%;
  font-family: AristotelicaSmallCaps;
  font-size: 8rem;
  font-weight: 500;
  text-align: center;
  color: #fff;
`

export default class ContactPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      disabled: false,
      emailSent: null,
    }
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
        [name]: value
    })
  }

  handleSubmit = (event) => {
      event.preventDefault();

      console.log(event.target);

      this.setState({
          disabled: true,
          emailSent: true
      });
  }

   render() {
     return (
      <ContactSection>
        <Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="full-name" className="light">Full Name</Form.Label>
              <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="email" className="light">Email</Form.Label>
              <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="message" className="light">Message</Form.Label>
              <Form.Control id="message" name="message" as="textarea"rows="3" value={this.state.message} onChange={this.handleChange} />
            </Form.Group>
              <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                  Send
              </Button>
              {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent. Thank you :)</p>}
              {this.state.emailSent === false && <p className="d-inline fail-msg">Uh Oh! Email Not Sent.</p>}
          </Form>
        </Content>
        <TitleGroup>
          <Title id="title-bio">
            Contact Me
          </Title>
        </TitleGroup>
      </ContactSection>
   );
  }
}
