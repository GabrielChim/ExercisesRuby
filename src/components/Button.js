import React from 'react';
import styled from 'styled-components';

function Button(props) {
  const ButtonStyled = styled.button`
  border: none;
  color: ${props.color};
  background-color: white;
  padding: 6px;
  margin-left: 6px;
  font-weight: 500;

  &:hover {
    cursor: pointer;
  }
`;
  return (
    <ButtonStyled>{props.value}</ButtonStyled>
  );
}

export default Button;