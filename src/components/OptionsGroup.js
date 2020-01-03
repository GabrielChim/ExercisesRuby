import React from 'react';
import styled from 'styled-components';

function OptionsGroup(props) {
  const RadioButton  = styled.input.attrs(props => ({
    type: "radio",
    name: "button"
  }))`
    display: none;

    &:checked + div {
      background-color: #8D7AFF;
      color: white;
      font-weight: 500;
    }
  `;

  const Container = styled.div`
    display: inline-block;
    width: 340px;
    border: 1px solid #e0e0e0;
    padding: 12px;
    color: #424242;
    margin-bottom: 5px;

    &:hover {
      cursor: pointer;
    }
  `;

  return (
    <label>
      <RadioButton />
      <Container>{props.value}</Container>
    </label>
  );
}
  
export default OptionsGroup;