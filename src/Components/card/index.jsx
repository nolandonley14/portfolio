import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
`

const CardInfo = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
`

const CardTitle = styled.div`
  width: 100%;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
`

const CardDesc = styled.div`
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
`

export function Card(props) {
  return <CardWrapper>
    <CardInfo>
      <CardTitle>JASMINE</CardTitle>
      <CardDesc>This is some text about Jasmine.</CardDesc>
    </CardInfo>
  </CardWrapper>
}
