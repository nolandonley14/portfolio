import React from 'react';
import styled from 'styled-components/macro';

const ESection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
`

const EGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px 0px;
  width: 100%;
`

const EGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const EContent = styled.div`
  color: #fff;
  text-align: center;
  font-family: Biryani-Regular;
  font-weight: 300;
  font-size: 1rem;
  margin-top: 0;
  padding: 0;
`

const SectionTitle = styled.div`
  width: 100%;
  font-family: AristotelicaSmallCaps;
  font-size: 3rem;
  font-weight: 300;
  text-align: center;
  color: #8CDBC4;
`

const SectionSubTitle = styled.div`
  font-family: Biryani-Regular;
  font-size: 1rem;
  font-weight:300;
  text-align: center;
  color: #8CDBC4;
`

const YearSubTitle = styled.div`
  font-family: Biryani-Regular;
  font-size: 1rem;
  font-weight: 300;
  text-align: center;
  color: #8CDBC4;
  margin-top: -5px;
`

export default function EducationContainer() {
  return (
    <ESection>
      <SectionTitle>Education</SectionTitle>
      <EGroup>
        <EGrid>
          <SectionSubTitle><strong>Mercer Univesity</strong></SectionSubTitle>
          <YearSubTitle>2017-2021</YearSubTitle>
        </EGrid>
        <EGrid>
          <EContent><strong>Bachelor of Science in Engineering (B.S.E)</strong></EContent>
          <EContent style={{marginTop:"-5px"}}>Computer Specialization</EContent>
          <EContent style={{marginTop:"-5px"}}>Computer Science Double Major</EContent>
          <EContent style={{marginTop:"-5px"}}>Mathematics Minor</EContent>
        </EGrid>
      </EGroup>
      <EGroup>
        <EGrid>
          <SectionSubTitle><strong>Mercer Univesity</strong></SectionSubTitle>
          <YearSubTitle>2020-2022</YearSubTitle>
        </EGrid>
        <EGrid>
          <EContent><strong>Master of Science in Engineering (M.S.E)</strong></EContent>
          <EContent style={{marginTop:"-5px"}}>Software Specialization</EContent>
        </EGrid>
      </EGroup>
    </ESection>

  );
}
