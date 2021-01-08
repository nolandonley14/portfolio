import React from "react";
import styled from "styled-components";
import LandingPage from "./landingPage";
import BioPage from "../Biography";
import ProjectsPage from "../Projects";
import SkillsPage from "../Skills";
import ReactPageScroller from "react-page-scroller";


const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #1F2023;
  font-family: Aristotelica;
  color: #fff;
`

export default class Homepage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {currentPage: null};
  }

  handlePageChange = number => {
        this.setState({ currentPage: number})
  }

  handleBeforePageChange = number => {
      console.log(number);
  }

  render() {
      return (
        <PageContainer
        id="background">
        <ReactPageScroller
          pageOnChange = {this.handlePageChange}
          onBeforePageScroll = {this.handleBeforePageChange}
          customPageNumber = {this.state.currentPage}
          animationTimer = {800}
          >
        <LandingPage />
        <BioPage />
        <SkillsPage />
        <ProjectsPage />
        </ReactPageScroller>
      </PageContainer>

    );
  }
}
