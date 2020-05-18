import React from 'react';
import styled from '@emotion/styled';


const Location = ({ ciudad, pais }) => {

    const Container = styled.div`
        // border: 1px solid blue;
        text-align: center;
    `
    const Ciudad = styled.h1`
        // border: 5px solid orange;
        font-family: 'Merriweather', sans-serif;
        font-sizze: 1.6rem;
    `
    const Pais = styled.h3`
        // border: 2px solid green;
        font-family: 'fire sans', sans-serif;
        font-size: 1.1rem;
    `
    return (
        <Container>
            <Ciudad>{ciudad}</Ciudad>
            <Pais>{pais}</Pais>
        </Container>
    );
}
export default Location;