import React from "react";
import styled from "styled-components/macro";
// import ReactPageScroller from "react-page-scroller";
import {ReactComponent as NolanWithDesk} from "../../Assets/illustrations/nolanWithDesk.svg";
import "../../Styles/Pages/homepage.css";


const LandingSection = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
`

const LogoDiv = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 80%;
  max-width: 1280px;
  height: auto;
`

const Title = styled.div`
  position: absolute;
  left: 10%;
  top: 45vh;
  display: flex;
  flex-direction: column;
  color: #8CDBC4;
  font-size: 2.5rem;
`

export default class Homepage extends React.Component {
   render() {
     return (<div>
       <LandingSection id = "landing">
           <Title>
             Hey! I'm Nolan Donley, <br/>a UI / UX engineer from Atlanta
           </Title>
         <LogoDiv>
           <NolanWithDesk id="nolan-with-desk"></NolanWithDesk>
         </LogoDiv>
     </LandingSection>

   </div>);
 }
}
