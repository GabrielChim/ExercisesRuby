import React from 'react';
import styled from 'styled-components';

function OptionsMenu(props) {
  const color = props.color ? props.color : "#424242";
  const fontSize = props.size ? props.size : "16px";
  const fontWeight = props.active ? "bolder" : "normal";
    
  const P = styled.p`
    font-size: ${fontSize};
    color: ${color};
    font-weight: ${fontWeight};
    margin: 14px 0;
  `;

    return (
    <P>{props.value}</P>
    );
  }
  
  export default OptionsMenu;