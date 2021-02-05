import React from "react";
import styled from "styled-components/macro";
import "../../Styles/Pages/skills.css";
import EducationContainer from "../../Components/skills/EducationContainer";
import SkillsContainer from "../../Components/skills/SkillsContainer";
import CoursesContainer from "../../Components/skills/CoursesContainer";

const SkillsSection = styled.div`
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

const ContentSeciton = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
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

export default class SkillsPage extends React.Component {
   render() {
     return (
       <SkillsSection>
         <ContentSeciton>
           <EducationContainer/>
           <SkillsContainer/>
         </ContentSeciton>
         <CoursesContainer />
         <TitleGroup>
           <Title id="title-bio">
             Background
           </Title>
         </TitleGroup>
     </SkillsSection>
   );
  }
}
