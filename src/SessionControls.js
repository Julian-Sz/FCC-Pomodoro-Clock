import React from "react";
import { ACTIONS } from "./App.js";

export default function SessionControls(props) {
  let minutes = Math.floor(props.store.sessionLength / 60);
  return (
    <div className="mx-1 flex-1 grid grid-rows-2 grid-cols-3 text-center justify-items-center content-center align-middle">
      <h2 id="session-label" className="col-span-3">
        Session Length
      </h2>

      <button
        onClick={() => {
          props.dispatch({ type: ACTIONS.SESSION_INC });
        }}
        id="session-increment"
        className="btn"
      >
        <i className="bi bi-plus-lg"></i>
      </button>
      <span id="session-length" className="text-xl">
        {minutes}
      </span>
      <button
        onClick={() => {
          props.dispatch({ type: ACTIONS.SESSION_DEC });
        }}
        id="session-decrement"
        className="btn"
      >
        <i className="bi bi-dash-lg"></i>
      </button>
    </div>
  );
}
