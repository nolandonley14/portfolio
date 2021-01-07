import React from "react";
import styled from "styled-components";
import { motion } from 'framer-motion';
import {Logo} from "../../Components/logo";
import {ReactComponent as NolanWithDesk} from "../../Assets/illustrations/nolanWithDesk.svg";
import { Links } from "../../Components/links";
import { ScrollLabel } from "../../Components/scrollLabel";
import "../../Styles/Pages/landingPage.css";


const LandingSection = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
`

const TitleLayout = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const LinksList = styled.div`
  margin-top: 20px;
  width: 78%;
  height: auto;
  display: flex;
  flex-direction: row;
  font-size: 12pt;
  justify-content: space-between;
`

const LogoDiv = styled.div`
  position: fixed;
  width: 60%;
  height: auto;
`

const Link = styled.a`
  color: #8CDBC4;
`

const Title = styled.div`
  margin-top: -50px;
  margin-left: 200px;
  width: 40%;
  height: auto;
  display: flex;
  flex-direction: column;
  color: #8CDBC4;
  font-size: 25pt;
`

export function LandingPage(props) {
  // Get the id of the <path> element and the length of <path>

  return <div>
    <LandingSection id = "landing">
    <TitleLayout>
      <Title>
        Hey! I'm Nolan Donley, <br/>a UI / UX engineering student from Atlanta
        <LinksList>
          <Link>About</Link>
          <Link>Skills</Link>
          <Link>Projects</Link>
          <Link>Education</Link>
        </LinksList>
      </Title>
    </TitleLayout>
    <LogoDiv>
      <NolanWithDesk id="nolan-with-desk"></NolanWithDesk>
    </LogoDiv>
  </LandingSection>

</div>
}
