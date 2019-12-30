import React from 'react';
import styled from 'styled-components';

function InputNumber(props) {
  const Input = styled.div`
    width: ${props.width};
    padding: 8px;
    border: 1px solid #eeeeee;
    border-radius: 4px;
    background-color: #eeeeee;
    margin: 2px;
    display: ${props.display};
    justify-content: space-around;
  `;

  const Span = styled.span`
    color: #9aa0a6;
  `;

  return (
    <Input>
      <Span>{props.firstValue}</Span>
      <Span>{props.secondValue}</Span>
    </Input>
  );
}

export default InputNumber;