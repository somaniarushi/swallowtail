import React from 'react';
import styled from 'styled-components'

const Testing = () => (
    <Div>
        <Header>Dark Mode Demo</Header>
        <SubHeader>Here's a Quick Dark Mode Demonstration.</SubHeader>
        <SubSubHeader>Toggle Away :) </SubSubHeader>
    </Div>
);

const Header = styled.h1`
    font-family: "Trebuchet MS";
    font-size: 2rem;
    color: rgba(3, 127, 184, 0.944);
`

const SubHeader = styled.h2`
    font-family: "Trebuchet MS";
    font-size: 2em;
    color: grey;
`
const SubSubHeader = styled.h3`
    font-family: "Trebuchet MS";
    font-size: 2em;
    color: rgba(128, 0, 128, 0.801);
`
  
const Div = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: -10px;
`
  

export default Testing