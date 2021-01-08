import React from "react";
import styled from "styled-components";
import { Card } from "../../Components/card";

const ProjectsSection = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CardSection = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Title = styled.div`
  width: 100%;
  font-family: AristotelicaSmallCaps;
  font-size: 8rem;
  font-weight: 500;
  text-align: center;
`

export default class ProjectsPage extends React.Component {
   render() {
     return (
       <ProjectsSection>
         <CardSection>
           <Card
             id="card1"
             title="ATO iOS App"
             description="This is some text about Jasmine.">
           </Card>
           <Card
             title="J.A.S.M.I.N.E."
             description="This is some text about Jasmine.">
           </Card>
           <Card
             title="Web Portfolio"
             description="This is some text about Jasmine.">
           </Card>
         </CardSection>
           <Title id="title-projects">
             Projects
           </Title>
       </ProjectsSection>
     );
   }
}
