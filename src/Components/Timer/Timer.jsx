import React, { useEffect, useState } from "react";

function Timer({ onTimeout }) {
  const [timer, setTimer] = useState(90);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000); 
    

    return () => clearInterval(intervalId);
  }, []);

  const handleTimeout = () => {
    if (timer === 0) {
      onTimeout(true);
    }
  };

  useEffect(() => {
    handleTimeout();
  }, [timer === 0]);

  return <h1>Timer: {timer}</h1>;
}

export default Timer;
