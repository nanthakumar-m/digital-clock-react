import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [currentTime, setcurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setcurrentTime(new Date());
    }, 1000);

    //this clean up function is used to clear the interval function once the component is gonna un mounted
    return;
    () => clearInterval(timer);
  }, []);

  // formatting the hour from railway time to normal
  const formatHour = (hour) => {
    return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    //if the hour is 0 then its 12 ,
  };

  const formatTimeWithLeadingZero = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formatDate = (date) => {
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <>
      <div className="digital-clock">
        <h1>Digital Clock</h1>
        <div className="time">
          {formatTimeWithLeadingZero(formatHour(currentTime.getHours()))}:
          {formatTimeWithLeadingZero(currentTime.getMinutes())}:
          {formatTimeWithLeadingZero(currentTime.getSeconds())}
          {currentTime.getHours() >= 12 ? "  PM" : "  AM"}
        </div>
        <div className="date">{formatDate(currentTime)}</div>
      </div>
    </>
  );
}

export default App;
