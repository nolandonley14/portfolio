import React from 'react';
import styled from 'styled-components/macro';

const SectionTitle = styled.div`
  width: 100%;
  font-family: AristotelicaSmallCaps;
  font-size: 3rem;
  font-weight: 300;
  text-align: center;
  color: #8CDBC4;
  margin-top: 20px;
`

const CGroup = styled.div`
  display: flex;
  justify-content: center;
`

const CContent = styled.p`
  color: #fff;
  text-align: center;
  font-family: Biryani-Regular;
  font-weight: 300;
  font-size: 1rem;
  margin: 0;
  padding: 10px;
`

export default function CoursesContainer() {
  return (
    <div>
      <SectionTitle style={{paddingTop:"10px"}} >Favorite Courses</SectionTitle>
      <CGroup>
        <CContent>Object-Oriented Project Methods</CContent>
        <CContent>Data Structures & Algorithms</CContent>
        <CContent>Artifical Intelligence</CContent>
        <CContent>Usability</CContent>
        <CContent>Software Engineering</CContent>
      </CGroup>
      <CGroup>
        <CContent>Advanced Technical Communication</CContent>
        <CContent>Embedded Computer Systems</CContent>
        <CContent>File Structures & Advanced Algorithms</CContent>
        <CContent>Computer Vision</CContent>
      </CGroup>
      <CGroup>
        <CContent>Mobile Development</CContent>
        <CContent>Organization of Programming Languages</CContent>
      </CGroup>
    </div>
  );
}
