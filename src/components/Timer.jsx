import { useState, useEffect } from "react";
import { HiPlayPause } from "react-icons/hi2";
import { GrPowerReset } from "react-icons/gr";

function Timer({ seconds }) {
  const [remainingTime, setRemainingTime] = useState(seconds);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setRemainingTime((time) => (time > 0 ? time - 1 : 0));
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const toggleTimer = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setRemainingTime(seconds);
  };

  const minutes = Math.floor(remainingTime / 60);
  const secondsLeft = remainingTime - minutes * 60;

  return (
    <div className="text-center bg-neutral-600 p-10 rounded-xl font-bold mb-2 text-5xl text-white">
      {minutes < 10 ? "0" + minutes : minutes}:
      {secondsLeft < 10 ? "0" + secondsLeft : secondsLeft}
      <div className="flex justify-center gap-1">
        <button onClick={toggleTimer} className="hover:bg-gray-500 active:bg-gray-300 p-4 rounded">
            <HiPlayPause isRunning={isRunning} />
        </button>
        <button onClick={resetTimer} className="hover:bg-gray-500 active:bg-gray-300 p-3 rounded">
        <GrPowerReset/></button>
      </div>
    </div>
  );
}

export default Timer;

