import React, {useState} from 'react';
import styled from 'styled-components';

function Days(props) {
  const [background, setBackground] = useState("#eeeeee");
  const [color, setColor] = useState("#9aa0a6");
  let onFocus = false;

  const ContainerDay = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: ${background};
    font-size: 12px;
    color: ${color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    font-weight: 500;

    &:hover {
      cursor: pointer;
    }
  `;

  const setBackgroundColor = () => {
    if(onFocus){
      setBackground("#eeeeee");
      setColor("#9aa0a6")
      onFocus = false;
    } else {
      setBackground("#1a73e8");
      setColor("white");
      onFocus = true;
    }
  }

  return (
    <ContainerDay onClick={setBackgroundColor}>
      <span>{props.value}</span>
    </ContainerDay>
  );
}

export default Days;