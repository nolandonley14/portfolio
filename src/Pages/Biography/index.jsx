import React from "react";
import styled from "styled-components";


const TestSection = styled.div`
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
  opacity: 1;
`

export function BioPage(props) {

  return <TestSection>
      <Title id="title">
        Software Engineer
      </Title>
  </TestSection>
}
