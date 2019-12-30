import React from 'react';
import styled from 'styled-components';

function InputNumber() {
  const Input = styled.input`
    width: 45px;
    padding: 8px;
    border: 1px solid #eeeeee;
    border-radius: 4px;
    margin: 6px;
    background-color: #eeeeee;
    -moz-appearance: textfield;

    &:hover, &:focus {
      -moz-appearance: number-input;
      border-bottom: 2px solid #1a73e8;
    }
  `;

  return (
    <Input type="number" defaultValue="1"/>
  );
}

export default InputNumber;