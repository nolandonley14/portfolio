import React from "react";
import styled from "styled-components";
import { Card } from "../../Components/card";



const ProjectsSection = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Title = styled.div`
  width: 100%;
  font-size: 5rem;
  font-weight: 700;
  text-align: center;
`

export function ProjectsPage(props) {
  return <ProjectsSection>
      <Title id="title">
        Projects
        <Card></Card>
      </Title>
  </ProjectsSection>
}
