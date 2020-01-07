import React from 'react';
import styled from 'styled-components';

function Day() {
  const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 14px 20px 0;
    margin-left: 100px;
  `;
  
  const P = styled.p`
    text-transform: uppercase;
    margin: 0;
    font-size: 12px;
    padding-bottom: 10px;
  `;

  const Span = styled.span`
    width: 25px;
    font-size: 26px;
    text-align: center;
  `;

  return(
    <Container>
      <P>Mié</P>
      <Span>8</Span>
    </Container>
  );
}

export default Day;