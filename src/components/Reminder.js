import React from 'react'
import styled from 'styled-components';

function Reminder(props) {
  const Container = styled.div`
    width: 890px;
    background-color: #039be5;
    color: white;
    border: 1px solid #039be5;
    border-radius: 4px;
    padding: 2px;
    font-size: 12px;
    margin-left: 10px;
    margin-bottom: 2px;
  `;
  
  return(
    <Container>
      {props.value}
    </Container>
  );
}

export default Reminder;