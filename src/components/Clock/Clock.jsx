import React, { useState, useEffect } from "react";
import "./clock.scss";

export const Clock = () => {
  let [date, setDate] = useState(new Date());

  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div className="clock-wrapper">
      {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
    </div>
  );
};

export default Clock;
