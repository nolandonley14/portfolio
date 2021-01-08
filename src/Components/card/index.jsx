import React from 'react';
import styled from 'styled-components';


const CardInfo = styled.div`
  height: 50%;
  width: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
`

const CardTitle = styled.div`
  width: 100%;
  font-family: Aristotelica;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  color: #000;
`

const CardDesc = styled.div`
  width: 100%;
  font-family: Biryani-ExtraLight;
  font-size: 0.75rem;
  font-weight: 400;
  text-align: center;
  color: #000;
`

export function Card({ title, description}) {
  return  <CardInfo>
      <CardTitle>{title}</CardTitle>
      <CardDesc>{description}</CardDesc>
    </CardInfo>
}
