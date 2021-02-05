import React from 'react';
import styled from 'styled-components/macro';
import {NavLink as Link} from 'react-router-dom';
import {ReactComponent as WebsiteLogo} from "../../../Assets/logo/websiteLogo.svg";

const NavLine = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  margin-left: 20px;
  margin-top: 10px;
  align-items: center;
  justify-content: flex-end;
  transform-origin: left top;
  transform: rotate(-90deg) translateX(-100%);
  z-index: 100;
`

const NavLink = styled(Link)`
  color: #8CDBC4;
  display: flex;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  font-size: 1rem;
  margin-left: 20px;
  &:hover {
    color: #5CAB94;
  }
  &.active {
    color: #bbbbbb;
  }
`

const NavSpacer = styled.div`
`

const NavLogo = styled.div`
  position: sticky;
  top: 30px;
  left: 40px;
  width: 50px;
  transform: rotate(90deg);
`

export default function NavBar() {
  return (
      <NavLine >
        <div id="navbar">
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/about">
          About
        </NavLink>
        <NavLink to="/background" >
          Background
        </NavLink>
        <NavLink to="/projects" >
          Projects
        </NavLink>
        <NavLink to="/contact" >
          Contact Me
        </NavLink>
      </div>
        <NavSpacer id="nav-spacer"/>
        <NavLink to="/">
          <NavLogo>
            <WebsiteLogo id="website-logo"></WebsiteLogo>
          </NavLogo>
        </NavLink>
      </NavLine>

  );
}
