import React from "react";
import styled from "styled-components";
import {ReactComponent as NolanWithDesk} from "../../Assets/illustrations/nolanWithDesk.svg";
import {ReactComponent as WebsiteLogo} from "../../Assets/logo/websiteLogo.svg";
import "../../Styles/Pages/landingPage.css";


const LandingSection = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
`

const LinksList = styled.div`
  margin-top: 20px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  font-size: 12pt;
  justify-content: space-between;
`

const LogoDiv = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 80%;
  max-width: 1280px;
  height: auto;
`

const Link = styled.a`
  color: #8CDBC4;
`

const HeaderLogo = styled.div`
  position: sticky;
  top: 30px;
  left: 40px;
  width: 50px;
`

const Title = styled.div`
  position: absolute;
  left: 10%;
  top: 45vh;
  display: flex;
  flex-direction: column;
  color: #8CDBC4;
  font-size: 25pt;
`

export function LandingPage(props) {
  return <div>
    <LandingSection id = "landing">
      <HeaderLogo>
        <WebsiteLogo id="website-logo"></WebsiteLogo>
      </HeaderLogo>
        <Title>
          Hey! I'm Nolan Donley, <br/>a UI / UX engineer from Atlanta
          <LinksList>
            <Link>About</Link>
            <Link>Skills</Link>
            <Link>Projects</Link>
            <Link>Education</Link>
          </LinksList>
        </Title>
      <LogoDiv>
        <NolanWithDesk id="nolan-with-desk"></NolanWithDesk>
      </LogoDiv>
  </LandingSection>

</div>
}
