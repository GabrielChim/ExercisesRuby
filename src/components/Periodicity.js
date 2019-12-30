import React from 'react';
import styled from 'styled-components';
import InputNumber from './InputNumber';
import Select from './Select';
import Days from './Days';
import ContainerRadioButtons from './ContainerRadioButtons';
import Button from './Button';

const Container = styled.div`
  width: 375px;
  height: 400px;
  border: 1px solid #9aa0a6;
  margin: 50px auto;
  padding: 10px 15px;
  font-size: 14px;
  font-weight: 400;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 500;
`;

const SectionFrequency = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const SectionDays = styled.div`
  margin-bottom: 20px;
`;

const ContainerDays = styled.div`
  display: flex;
`;

const SectionFinalize = styled.div`
  margin-bottom: 20px;
`;

const SectionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

function Periodicity() {
  return (
    <Container>
      <Title>Periodicidad personalizada</Title>
      <SectionFrequency>
        <span>Repetir cada</span>
        <InputNumber />
        <Select />
      </SectionFrequency>
      <SectionDays>
        <p>Se repite el</p>
        <ContainerDays>
          <Days value="D"/>
          <Days value="L"/>
          <Days value="M"/>
          <Days value="X"/>
          <Days value="J"/>
          <Days value="V"/>
          <Days value="S"/>
        </ContainerDays>
      </SectionDays>
      <SectionFinalize>
        <p>Termina</p>
        <div>
          <ContainerRadioButtons />
        </div>
      </SectionFinalize>
      <SectionButtons>
        <Button color="#757575" value="Cancelar"/>
        <Button color="#1a73e8" value="Listo"/>
      </SectionButtons>
    </Container>
  );
}

export default Periodicity;