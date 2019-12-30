import React, { useState } from 'react';
import styled from 'styled-components';

function Select() {
  const [display, setDisplay] = useState("none");
  const [text, setText] = useState("seleccionar");
  let state = false;

  const SelectOptions = styled.div`
    width: 90px;
    padding: 8px;
    border: 1px solid #eeeeee;
    border-radius: 4px;
    background-color: #eeeeee;
    margin: 2px;
    position: relative;
    display: inline-block;
  `;

  const SelectContent = styled.div`
    display: ${display};
    position: absolute;
    background-color: white;
    min-width: 108px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 0;
    z-index: 1;
    left: -1px;
    top: -40px;
  `;

  const P = styled.p`
    margin: 0;
    padding: 10px 7px;

    &:hover {
      background-color: #eeeeee;
    }
  `;

  const Triangle = styled.span`
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #000;
    position: absolute;
    right: 10px;
    top: 13px;
  `;

  const dropDown = () => {
    state ? setDisplay("none") : setDisplay("block"); 
  }

  const optionSelected = (event) => {
    setText(event.target.textContent);
    state = true;
  }

  return (
    <SelectOptions onClick={dropDown}>
      <span id="js-selected">{text}</span>
      <Triangle></Triangle>
      <SelectContent id="js-select-content">
        <P onClick={optionSelected}>dia</P>
        <P onClick={optionSelected}>semana</P>
        <P onClick={optionSelected}>mes</P>
        <P onClick={optionSelected}>año</P>
      </SelectContent>
    </SelectOptions>
  );
}

export default Select;