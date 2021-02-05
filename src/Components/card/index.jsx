import React from 'react';
import styled from 'styled-components/macro';

const CardInfo = styled.div`
  width: 30%;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 0px 0px;
`

const CardTitle = styled.div`
  width: 100%;
  font-family: Aristotelica;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  bottom: 20px;
  color: #000;
  margin-top: 15px;
`

const CardDesc = styled.div`
  width: 80%;
  font-family: Biryani-ExtraLight;
  font-size: 0.75rem;
  font-weight: 400;
  text-align: center;
  color: #000;
  margin-top: 10px;
`

const LinksContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  justify-content: space-evenly;
`

const CardGithubLink = styled.img`
  width: 30px;
  height: 30px;
`

const CardDemoLink = styled.img`
  width: 30px;
  height: 30px;
  margin-bottom: 10px;
`

export function Card({ title, description, url, codeLink, demoLink}) {
  return <CardInfo>
        <CardImage src={url}></CardImage>
        <CardTitle>{title}</CardTitle>
        <CardDesc>{description}</CardDesc>
        <LinksContainer>
          {codeLink !== "" ? (<a href={codeLink} target="_blank" rel="noreferrer"><CardGithubLink src="github.svg"></CardGithubLink></a>) : null}
          {demoLink !== "" ? (<a href={demoLink} target="_blank" rel="noreferrer"><CardDemoLink src="programing.svg"></CardDemoLink></a>) : null}
        </LinksContainer>
    </CardInfo>
}
