import React from 'react';
import styled from 'styled-components/macro';

const SectionTitle = styled.div`
  width: 100%;
  font-family: AristotelicaSmallCaps;
  font-size: 3rem;
  font-weight: 300;
  text-align: center;
  color: #8CDBC4;
`

const Bullet = styled.span`
  color: #fff;
  font-size: 1.5rem;
  padding: 0px 10px;
`

const SSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
`

const SGrid = styled.div`
  display: flex;
  flex-direction: column;
`

const SGroup = styled.div`
  display: flex;
  justify-content: center;
`

const SContent = styled.div`
  color: #fff;
  text-align: center;
  font-family: Biryani-Regular;
  font-weight: 300;
  font-size: 1.5rem;
  margin-top: 0;
  padding: 0;
`

export default function SkillsContainer() {
  return (
    <SSection>
      <SectionTitle>Things I Know</SectionTitle>
      <SGrid>
        <SGroup>
          <SContent>C++</SContent>
          <Bullet>&#8226;</Bullet>
          <SContent>Java</SContent>
          <Bullet>&#8226;</Bullet>
          <SContent>Python</SContent>
          <Bullet>&#8226;</Bullet>
          <SContent>C#</SContent>
          <Bullet>&#8226;</Bullet>
          <SContent>Swift</SContent>
        </SGroup>
        <SGroup>
          <SContent>HTML(5)</SContent>
          <Bullet>&#8226;</Bullet>
          <SContent>CSS(3)</SContent>
          <Bullet>&#8226;</Bullet>
          <SContent>JavaScript</SContent>
          <Bullet>&#8226;</Bullet>
          <SContent>JQuery</SContent>
          <Bullet>&#8226;</Bullet>
          <SContent>React</SContent>
        </SGroup>
        <SGroup>
          <SContent>OO A/D</SContent>
          <Bullet>&#8226;</Bullet>
          <SContent>MVC</SContent>
          <Bullet>&#8226;</Bullet>
          <SContent>Agile/Scrum</SContent>
          <Bullet>&#8226;</Bullet>
          <SContent>Git</SContent>
        </SGroup>
        <SGroup>
          <SContent>Adobe Ps, Ai, Xd</SContent>
          <Bullet>&#8226;</Bullet>
          <SContent>Microsoft Office</SContent>
        </SGroup>
      </SGrid>
    </SSection>

  );
}
