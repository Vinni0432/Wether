import React from "react";

const TimeWether = ({ unix_timestamp }) => {
  let date = new Date(unix_timestamp * 1000);
  let dayDate = date.getDay();
  let day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  console.log(day[dayDate]);
  return (
    <>
      {" "}
      <span>{day[dayDate]}</span>{" "}
    </>
  );
};

export default TimeWether;
