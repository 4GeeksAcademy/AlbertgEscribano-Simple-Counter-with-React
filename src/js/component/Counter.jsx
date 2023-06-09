import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="Counter">
      <div className="CounterImage">
            <i class="fa-solid fa-clock"></i>
      </div>
      <div className="five">{Math.floor(seconds / 10000) % 10}</div>
      <div className="four">{Math.floor(seconds / 1000) % 10}</div>
      <div className="three">{Math.floor(seconds / 100) % 10}</div>
      <div className="two">{Math.floor(seconds / 10) % 10}</div>
      <div className="one">{seconds % 10}</div>
    </div>
  );
};

export default Counter;
