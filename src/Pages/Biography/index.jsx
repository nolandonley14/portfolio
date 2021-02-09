import React from "react";
import styled from "styled-components/macro";
import "../../Styles/Pages/biography.css";

const MainSection = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 0;
  margin: 0;
  z-index: -1;
`
const BioSpacer = styled.div`
  height: 25vh;
`

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 10px;
`

const Title = styled.div`
  width: 100%;
  font-family: AristotelicaSmallCaps;
  font-size: 8rem;
  font-weight: 500;
  text-align: center;
  color: #8CDBC4;
`

const Quote = styled.div`
  margin-top: -30px;
  font-family: Biryani-Regular;
  font-weight: normal;
  text-align: center;
  font-size: 1.4rem;
  color: #fff;
`

const BioGroup = styled.div`
  width: 32%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const BioText = styled.div`
  font-family: Biryani-ExtraLight;
  font-size: 1rem;
  color: #fff;
`

const MoreInfoButton = styled.a`
  margin-top: 20px;
  font-family: Aristotelica;
  font-size: 1rem;
  color: #8CDBC4;
`

export default class BioPage extends React.Component {
   render() {
     return (
         <MainSection id='about'>
             <BioGroup className="vertical-center">
               <BioText>
                 I enjoy developing creative, modern user interfaces for web, mobile, and embedded systems. My goal is to empower my community by helping to create innovative, human-centric, front-end solutions to complement our newest tech advancements. <br/><br/>I am most interested in Human-Computer Interaction, Artificial Intelligence, Machince Learning, FinTech, and Sports.
                 </BioText>
                 <MoreInfoButton>
                   &lt; Read More &gt;
                 </MoreInfoButton>
             </BioGroup>
             <BioSpacer/>
           <TitleGroup>
             <Title id="title-bio">
               Designeloper
             </Title>
             <Quote>
               “A coffee drinking, energy-bar eating, coding machine <br/>with a keen eye for elegant design.” - Me
             </Quote>
           </TitleGroup>
         </MainSection>
   );
  }
}
