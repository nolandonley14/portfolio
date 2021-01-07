import React, { useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import { LandingPage } from "./landingPage";
import { BioPage } from "../Biography";
import { ProjectsPage } from "../Projects";


const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #1F2023;
  font-family: Aristotelica;
  color: #fff;
`

const Spacer = styled.div`
  width:100%;
  height:50vh;
`

export function Homepage(props) {

  return <PageContainer
    id="background">
    <LandingPage />
  </PageContainer>
}
