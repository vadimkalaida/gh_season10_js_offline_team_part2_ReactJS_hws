import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import Moment from 'react-moment';
import { MainTitle, TimeZonesBlock, TimeZonesBlockContainer, TimeZonesItem, TimeBlock, TimeButton } from "./elements";


const LiveClock = () => {
  const [ timeZonesArray, setTimeZonesArray ] = useState([]);
  const [ timeZoneName, setTimeZoneName ] = useState(timeZonesArray[447]);
  const [ typeOfClock, setTypeOfClock ] = useState('h:mm:ss a');

  useEffect(() => {
    setTimeZonesArray(moment.tz.names());
  }, []);

  const handleGetTimeZoneName = (item) => {
    setTimeZoneName(item);
  };

  const getTimeZonesArray = () => {
    return(
      <>
        { timeZonesArray.map((item, index) => <TimeZonesItem onClick={() => handleGetTimeZoneName(item)} key={index}>
          { item }
        </TimeZonesItem>) }
      </>
    );
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
        <Moment format={typeOfClock} interval={250} tz={timeZoneName}/>
        <TimeButton onClick={() => handleChangeTypeOfClock()}>Type of Clock</TimeButton>
      </TimeBlock>

    </>
  );
};

export default LiveClock;