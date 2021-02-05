import React from 'react';
import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const LogoContainer = styled.div`
  display: flex;
  ${'' /* margin-top: 12em; */}
  flex-direction: column;
  align-items: center;
`;

const NameText = styled.div`
  margin-top: 6px;
  font-size: 60px;
  color: #41B3A3;
  font-weight: 700;
`;


export function Logo(props) {
  return <LogoContainer>
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 429.92 354.13">
      <motion.path
        d="M 13 341.13 V 13 L 172.31 211.2 M 49 142.93 L 208.31 341.13 V 13 M 246.64 13 L 416.92 177.07 L 246.64 341.13"
        stroke="#41b3a3"
        strokeWidth="25"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill = "transparent"
        animate={{
          pathLength: [0, 1]
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: .1
        }}
      />
    </motion.svg>
    <NameContainer>
      <NameText id="name">Nolan Donley</NameText>
      <motion.div
        animate={{
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          loop: Infinity
        }}>
          <NameText>_</NameText>
        </motion.div>
    </NameContainer>
  </LogoContainer>
}
