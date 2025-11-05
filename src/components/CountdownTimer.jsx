import React, { useState, useEffect } from "react";

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const clockStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "2rem",
  };

  const timeBoxStyle = {
    background: "#ffffffff",
    borderRadius: "20%",
    width: "80px",
    height: "80px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    color: "#000000ff",
    fontWeight: "bold",
  };

  const numberStyle = { 
    fontSize: "1.5rem",
    fontFamily: "'Crake', serif"
  };
  const labelStyle = { 
    fontSize: "0.8rem", 
    marginTop: "4px",
    fontFamily: "'Brandon Grotesque', sans-serif"
  };

  return (
    <div style={clockStyle}>
      {["days", "hours", "minutes", "seconds"].map((unit) => (
        <div key={unit} style={timeBoxStyle}>
          <div style={numberStyle}>{timeLeft[unit]}</div>
          <div style={labelStyle}>{unit.toUpperCase()}</div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
