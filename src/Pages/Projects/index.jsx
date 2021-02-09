import React from "react";
import styled from "styled-components/macro";
import { Card } from "../../Components/card";
import "../../Styles/Pages/projects.css";

const ProjectsSection = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: -1;
`

const CardSection = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
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
  color: #fff;
`

export default class ProjectsPage extends React.Component {
   render() {
     return (
       <ProjectsSection id="projects">
         <CardSection>
           <Card
             id="card1"
             url="AppShot.png"
             title="ATO iOS App"
             description="This is a fully developed iOS application released to the app store. It is built in swift, and features Firebase Authentication and Cloud Firestore."
             codeLink="this"
             demoLink="ATOApp.html">
           </Card>
           <Card
             id="card2"
             url="JasmineShot.png"
             title="J.A.S.M.I.N.E."
             description='Jasmine is an infotainment system created to replace the outdated radio in my 2006 Jeep Liberty. It is built on a Raspberry Pi and 7" touchscreen. The software is written in python and uses the kivy graphics framework.'
             codeLink="https://github.com/nolandonley14/JASMINE"
             demoLink="">
           </Card>
           <Card
             id="card3"
             url="nolanWithDesk.svg"
             title="Web Portfolio"
             description="I am the designer and solo developer of this portfolio. The project's main technologies are React, JavaScript, CSS3, and Firebase ."
             codeLink="https://github.com/nolandonley14/portfolio"
             demoLink="">
           </Card>
         </CardSection>
         <TitleGroup>
           <Title id="title-projects">
             Projects
           </Title>
         </TitleGroup>
       </ProjectsSection>
     );
   }
}
