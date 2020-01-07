import React from 'react';
import styled from 'styled-components';
import Day from './Day';
import Hour from './Hour';
import Reminder from './Reminder';

function MainContainer() {
  const Container = styled.div`
    color: #424242;
    width: 1000px;
    margin: 0 auto;
    overflow: hidden;
  `;

  const Header = styled.div`
    width: 1000px;
    position: fixed;
    height: 95px;
    top: 0;
    background-color: white;
    z-index: 1;
  `;

  const TimeZoneContainer = styled.p`
    width: 1000px;
    margin: 0;
    display: flex;
    align-items: flex-end;
    font-size: 12px;
    padding-left: 14px;
    box-sizing: border-box;
  `;

  const TimeZone  = styled.span`
    width: 70px;
    padding-bottom: 4px;
    padding-top: 4px;
    border-right: 1px solid #bdbdbd;
  `;

  const LinearGradient = styled.div`
    height: 1px;
    background: linear-gradient(
      to left, 
      rgba(220, 220, 220, .2), 
      rgba(180, 180, 180, 1),
      rgba(180, 180, 180, 1),
      rgba(180, 180, 180, 1),
      rgba(180, 180, 180, 1),
      rgba(180, 180, 180, 1),
      rgba(180, 180, 180, 1),
      rgba(220, 220, 220, .2)
    );
  `;

  const SectionHours = styled.div`
    margin-top: 81px;
    margin-bottom: 8px;
  `;

  const HourReminder = styled.div`
    display: flex;
    align-items: flex-end;
  `; 

  const ContainerReminder = styled.div`
    border-bottom: 1px solid #bdbdbd;
    width: 100%;
  `;

  const days = () => {
    const hoursList = ['1 am', '2 am', '3 am', '4 am', '5 am', '6 am', '7 am',
                    '8 am', '9 am', '10 am', '11 am', '12 pm','1 pm', '2 pm',
                    '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm', '9 pm', 
                    '10 pm', '11 pm', '12 am'];
    let hoursFields = [];
    
    for (let index = 0; index < hoursList.length; index++) {
      if (hoursList[index] == '11 am') {
        hoursFields.push(
          <HourReminder>
            <Hour value={hoursList[index]} />
            <ContainerReminder>
              <Reminder value="Meeting, 10:30am" />
            </ContainerReminder>
          </HourReminder>
        );
      }
      hoursFields.push(
        <HourReminder>
          <Hour value={hoursList[index]} />
          <ContainerReminder>
          </ContainerReminder>
        </HourReminder>
      );
    }

    return hoursFields;
  }

  return(
    <Container>
      <Header>
        <Day />
        <TimeZoneContainer>
          <TimeZone>GMT-06</TimeZone>
        </TimeZoneContainer>
        <LinearGradient />
      </Header>
      <SectionHours>
        {days()}
      </SectionHours>
    </Container>
  );
}

export default MainContainer;