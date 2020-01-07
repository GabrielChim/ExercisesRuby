import React from 'react';
import styled from 'styled-components';

function Hour(props) {
  const P = styled.p`
    width: 80px;
    text-transform: uppercase;
    text-align: center;
    margin: 0;
    padding-top: 35px;
    border-right: 1px solid #bdbdbd;
    font-size: 11px;
    position: relative;
    top: 6px;
    left: 10px;
  `; 

  return(
    <P>{props.value}</P>
  );
}

export default Hour;