import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Counter = () => {
  const [seconds, setSeconds] = useState(0);
  const [isCounting, setIsCounting] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {


      if (isCounting) {

      setSeconds((prevSeconds) => prevSeconds + 1);}

    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isCounting]);

  const handleResume = () => {
        setIsCounting(true);
        };

  const handleStop = () => {
    setIsCounting(false)
  };

  const handleStart = () => {
      setSeconds(0);
      setIsCounting(true)
  };



  return (
    <div>
        <div className="Counter">
          <div className="CounterImage">
            <FontAwesomeIcon icon={faClock} />
          </div>
          <div className="five">{Math.floor(seconds / 10000) % 10}</div>
          <div className="four">{Math.floor(seconds / 1000) % 10}</div>
          <div className="three">{Math.floor(seconds / 100) % 10}</div>
          <div className="two">{Math.floor(seconds / 10) % 10}</div>
          <div className="one">{seconds % 10}</div>
        </div>
        <div className='buttonGroup'>
          <button onClick={handleStop}>Stop</button>
          <button onClick={handleResume}>Resume</button>
          <button onClick={handleStart}>Restart</button>
      </div>
    </div>

  );
};

export default Counter;
