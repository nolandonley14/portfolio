import React from "react";
import styled from "styled-components";


const TestSection = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
`

const MainGroup = styled.div`
  height: 100%;
`

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  width: 100%;
  font-family: AristotelicaSmallCaps;
  font-size: 8rem;
  font-weight: 500;
  text-align: center;
`

const Quote = styled.div`
  margin-top: -30px;
  font-family: Biryani-Regular;
  font-weight: normal;
  text-align: center;
  font-size: 1.4rem;
`

const BioGroup = styled.div`
  width: 32%;
  height: 80;
  display: flex;
  flex-direction: column;
  position: relative;
  left: 50%;
  top: 30%;
  align-items: center;
`

const BioText = styled.div`
  font-family: Biryani-ExtraLight;
  font-size: 1rem;
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
       <TestSection id="Section">
         <MainGroup>
           <BioGroup>
             <BioText>
               I enjoy developing creative, modern user interfaces for web, mobile, and embedded systems. My goal is to empower my community by helping to create innovative, human-centric, front-end solutions to complement our newest tech advancements. <br/><br/>I am most interested in AI, ML, FinTech, and Sports.
               </BioText>
               <MoreInfoButton>
                 &lt; Read More &gt;
               </MoreInfoButton>
           </BioGroup>
         </MainGroup>
         <TitleGroup>
           <Title id="title-bio">
             Designeloper
           </Title>
           <Quote>
             “A coffee drinking, energy-bar eating, coding machine <br/>with a keen eye for elegant design.” - Me
           </Quote>
         </TitleGroup>
     </TestSection>
   );
  }
}
