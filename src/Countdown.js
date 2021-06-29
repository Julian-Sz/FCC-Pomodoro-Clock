import React from "react";

export default function Countdown(props) {
  let minutes = Math.floor(props.seconds / 60);
  let seconds = props.seconds - minutes * 60;
  if (String(minutes).length === 1) {
    minutes = "0" + String(minutes);
  }
  if (String(seconds).length === 1) {
    seconds = "0" + String(seconds);
  }
  return (
    <div className="mb-12">
      <h2 id="timer-label" className="text-3xl">
        {props.break ? "Break" : "Session"}
      </h2>
      <div id="timer-container">
        <span id="time-left" className="text-8xl">
          {minutes}:{seconds}
        </span>
      </div>
    </div>
  );
}
