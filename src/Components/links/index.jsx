import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IconContext } from "react-icons";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin, FaInstagram } from 'react-icons/fa';


const LinksSection = styled.div`
  width: 25%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export function Links(props) {
  return <IconContext.Provider value={{
    className:"myReact-icons",
    color: "#C38D9E",
    size: "3em"
  }}>
    <LinksSection>
      <motion.a
        whileHover= {{
          scale:1.2
        }}
        whileTap={{
          scale:0.8
        }}
        href='https://github.com/nolandonley14'
        target="_blank"
      >
        <FaGithubSquare/>
      </motion.a>
      <motion.a
        whileHover= {{
          scale:1.2
        }}
        whileTap={{
          scale:0.8
        }}
        href='https://www.linkedin.com/in/nolan-donley-789192157/'
        target="_blank"
      >
        <FaLinkedin/>
      </motion.a>
      <motion.a
        whileHover= {{
          scale:1.2
        }}
        whileTap={{
          scale:0.8
        }}
        href='https://www.instagram.com/no14ndonley/'
        target="_blank"
      >
        <FaInstagram />
      </motion.a>
      <motion.a
        whileHover= {{
          scale:1.2
        }}
        whileTap={{
          scale:0.8
        }}
        href='https://www.facebook.com/n.donley14'
        target="_blank"
      >
        <FaFacebookSquare />
      </motion.a>
    </LinksSection>
  </IconContext.Provider>

}
