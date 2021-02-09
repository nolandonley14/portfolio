import React from "react";
import styled from "styled-components/macro";
import "../../Styles/Pages/skills.css";
import Content from '../../Components/content';
import ContactForm from '../../Components/contact';

const ContactSection = styled.div`
  width: 100%;
  height: 100vh;
  z-index: -1;
  position: relative;
`

const TitleGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
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

   render() {
     return (
      <ContactSection id="contact">
        <Content>
          <ContactForm/>
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
