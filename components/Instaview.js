import React from 'react'
import styled from 'styled-components'

const Instaview = (props) => {
  return(
    <Insta bg={props.bg}>
      <Spacer>
      <Title>Practice with {props.name} @ Pure</Title>
      <img src='/static/LOGO.svg' style={{ opacity: '0.05', bottom: 0, left: '80%', position: 'absolute' }} />
        <Classes>
          {props.children}
        </Classes>  
      </Spacer>
    </Insta>
  )

}

export default Instaview;

const Insta = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: #fff;
  background-image: url(${props => props.bg});
  background-position: center center;
  background-size: cover;
  z-index: 500;
  padding: 5%;
`

const Title = styled.div`
  background: #fff;
  padding: 0.20em 0.6em 0.1em;
  color: #333;
  position: absolute; 
  top: 0;
  left: 0;
  max-width: 100%;
  text-transform: none;
  font-family: 'Comfortaa', cursive;

  font-weight: 100;
  font-size: 0.8em;
`

const Classes = styled.div`
  .instaDate { 
    margin-top: 1.2em;
    font-weight: 600;  
    font-family: 'Comfortaa', cursive; 
    letter-spacing: -1px; 
    
    }
    padding: 0.15em;
    color: #333;
    position: absolute;
    bottom: 0;
    left: 0;
    max-width: 100%;
  * { font-size: 3.5vw;}

`

const Spacer = styled.div`
  position: absolute; 
  bottom: 8%;
  right: 1%;
  left: 0%;
  top: 8%;
  font-size: 6.5vw;
`