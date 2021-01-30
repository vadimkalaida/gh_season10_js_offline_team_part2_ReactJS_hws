import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import Clock from 'react-live-clock';
import { MainTitle, TimeZonesBlock, TimeZonesBlockContainer, TimeZonesItem, TimeBlock, TimeButton } from "./elements";


const LiveClock = () => {
  const [ timeZonesArray, setTimeZonesArray ] = useState([]);
  const [ timeZoneName, setTimeZoneName ] = useState(timeZonesArray[0]);
  const [ typeOfClock, setTypeOfClock ] = useState('h:mm:ss a');
  const [ counter, setCounter ] = useState(1);

  useEffect(() => {
    setTimeZonesArray(moment.tz.names());

  }, []);

  const getTimeZonesArray = () => {
    return(
      <>
        { timeZonesArray.map((item, index) => <TimeZonesItem onClick={() => handleGetTimeZoneName(item)} key={index}>
          { item }
        </TimeZonesItem>) }
      </>
    );
  };

  const handleGetTimeZoneName = (item) => {
    setTimeZoneName(item);
  };

  const handleChangeTypeOfClock = () => {
    if(typeOfClock === 'h:mm:ss a') {
      setTypeOfClock('HH:mm:ss');
      console.log(typeOfClock);
    } else {
      setTypeOfClock('h:mm:ss a');
      console.log(typeOfClock);
    }
  };


  return(
    <>
      <MainTitle>Switch Time Zone</MainTitle>
      <TimeZonesBlock>
        <TimeZonesBlockContainer>
          { getTimeZonesArray() }
        </TimeZonesBlockContainer>
      </TimeZonesBlock>
      <TimeBlock>
        <Clock format={typeOfClock} ticking={true} timezone={timeZoneName}/>
        <TimeButton onClick={() => handleChangeTypeOfClock()}>Type of Clock</TimeButton>
      </TimeBlock>

    </>
  );
};

export default LiveClock;