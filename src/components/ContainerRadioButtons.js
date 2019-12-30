import React from 'react';
import styled from 'styled-components';
import RadioButton from './RadioButton';
import InputText from './InputText';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContainerRadioInput = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
`;

function ContainerRadioButtons() {
  return (
    <Container>
      <ContainerRadioInput>
        <RadioButton value="Nunca"/>
      </ContainerRadioInput>

      <ContainerRadioInput>
        <RadioButton value="El"/>
        <InputText width="auto" display="inline" firstValue="27 de mar de 2020"/>
      </ContainerRadioInput>

      <ContainerRadioInput>
        <RadioButton value="Después de"/>
        <InputText width="145px" display="flex" firstValue="13" secondValue="repeticiones"/>
      </ContainerRadioInput>      
    </Container>
  );
}

export default ContainerRadioButtons;