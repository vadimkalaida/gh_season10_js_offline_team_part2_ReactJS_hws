import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';

const LiveClock = () => {
  const [ timeZonesArray, setTimeZonesArray ] = useState(moment.tz.names());
  const [ timeZoneName, setTimeZoneName ] = useState(timeZonesArray[0]);
  const [ counter, setCounter ] = useState(true);

  useEffect(() => {
    setCounter(!counter);
  }, [counter]);

  const handleGetTimeZoneName = (item) => {
    setTimeZoneName(item);
  };

  return(
    <>
      { timeZonesArray.map((item, index) => <div onClick={() => handleGetTimeZoneName(item)} key={index}>
        { item }
      </div>) }
      { moment.tz(timeZoneName).format('h:mm:ss a') }
    </>
  );
};

export default LiveClock;