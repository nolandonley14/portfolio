import React, { useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion } from 'framer-motion';
import {Logo} from "../../Components/logo";
import { Links } from "../../Components/links";
import { ScrollLabel } from "../../Components/scrollLabel";
import { useInView } from "react-intersection-observer";


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
const TestDiv = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top:100vh;
`

export function BioPage(props) {

  return <TestSection>
      <Title id="title">
        Software Engineer
      </Title>
  </TestSection>
}
