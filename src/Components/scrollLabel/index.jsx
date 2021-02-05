import React from "react";
import styled from "styled-components/macro";
import { IconContext } from "react-icons";
import { FaAngleDown } from 'react-icons/fa';


const ScrollContainer = styled.div`
  display: flex;
  margin-top: 1em;
  flex-direction: column;
  align-items: center;
`;

const ScrollLabelContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const ScrollLabelText = styled.div`
  font-size: 20px;
  color: #41B3A3;
  font-weight: 700;
`;

export function ScrollLabel(props) {
  return <ScrollContainer>
    <ScrollLabelContainer>
      <ScrollLabelText>Scroll</ScrollLabelText>
        <IconContext.Provider value={{
          className:"myReact-icons",
          color: "#41B3A3",
          size: "1.5em"
        }}>
        <FaAngleDown></FaAngleDown>
      </IconContext.Provider>
    </ScrollLabelContainer>
  </ScrollContainer>
}
