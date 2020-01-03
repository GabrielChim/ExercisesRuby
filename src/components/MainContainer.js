import React from 'react';
import styled from 'styled-components';
import OptionsMenu from './OptionsMenu';
import OptionsGroup from './OptionsGroup';

function MainContainer() {
  const Container = styled.div`
    width: 750px;
    height: 450px;
    margin: 50px auto;
    display: flex;
  `;

  const LateralMenu = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    padding: 60px 20px 20px;
  `;

  const ContainerOptions = styled.div`
    width: 500px;
    border: 1px solid  #8D7AFF;
    padding: 60px 20px 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  `;

  const H1 = styled.h1`
    width: 366px;
    font-size: 20px;
    font-weight: normal;
    color: #424242;
    margin-bottom: 30px;
  `;

  return (
    <Container>
      <LateralMenu>
        <OptionsMenu value="Identidad" color="#8D7AFF" />
        <OptionsMenu value="Propietario" color="#8D7AFF" />
        <OptionsMenu value="Características básicas" size="20px" color="#8D7AFF" active />
        <OptionsMenu value="Espacios" />
        <OptionsMenu value="Fotos y anuncio" />
        <OptionsMenu value="Precio" />
        <OptionsMenu value="Disponibilidad" />
      </LateralMenu>
      <ContainerOptions>
          <H1>Tipo de propiedad</H1>
          <OptionsGroup value="Departamento" />
          <OptionsGroup value="Estudio" />
          <OptionsGroup value="Loft" />
          <OptionsGroup value="Casa" />
          <OptionsGroup value="Duplex" />
      </ContainerOptions>
    </Container>
  );
}
  
export default MainContainer;