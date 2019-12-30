import React from 'react';
import styled from 'styled-components';

function RadioButton(props) {
  const Label = styled.label`
    width: 120px;
    position: relative;
    cursor: pointer;
    line-height: 20px;
    font-size: 14px;
    margin: 15px;
  `;

  const Span = styled.span`
    position: relative;
    display: block;
    float: left;
    margin-right: 10px;
    width: 15px;
    height: 15px;
    border: 2px solid #225cff;
    border-radius: 100%;
    -webkit-tap-highlight-color: transparent;

    &:after {
      content: '';
      position: absolute;
      top: 3px;
      left: 3px;
      width: 9px;
      height: 9px;
      border-radius: 100%;
      background: #225cff;
      transform: scale(0);
      transition: all 0.2s ease;
      opacity: 0.08;
      pointer-events: none;
    }

    Label:hover &:after {
      transform: scale(3.6);
    }
  `;

  const RadioButton = styled.input`
    display: none;

    &:checked + Span {
      border-color: #225cff;
    }

    &:checked + Span:after {
      transform: scale(1);
      transition: all 0.2s cubic-bezier(0.35, 0.9, 0.4, 0.9);
      opacity: 1;
    }
  `;

  return (
    <Label>
      <RadioButton type="radio" name="radio-button"/>
      <Span></Span>{props.value}
    </Label>
  );
}

export default RadioButton;