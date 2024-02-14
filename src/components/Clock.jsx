import { useEffect, useState } from "react";
import React from "react";

function Clock({ city, zone }) {
  let t = new Date().toLocaleTimeString("sv", { timeZone: zone });

  let [time, setTime] = useState(t);

  useEffect(() => {
    setInterval(() => {
      t = new Date().toLocaleTimeString("sv", { timeZone: zone });
      setTime(t);
    }, 1000);
  }, []);

  return (
    <>
      <div className="text-center bg-neutral-600 p-10 rounded-xl">
        <h1 className="text-xl font-bold mb-2 text-white">{city}</h1>
        <p className="text-xl text-white">{time}</p>
      </div>
    </>
  );
}

export default Clock;