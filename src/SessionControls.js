import React from "react";
import { ACTIONS } from "./App.js";

export default function SessionControls(props) {
  let minutes = Math.floor(props.store.sessionLength / 60);
  return (
    <div className="mx-5 flex-1 text-right">
      <h2 id="session-label" className="">
        Session Length
      </h2>
      <div id="session-length" className="">
        {minutes}
      </div>
      <button
        onClick={() => {
          props.dispatch({ type: ACTIONS.SESSION_INC });
        }}
        id="session-increment"
        className="border-4 bg-green-500 border-gray-300 rounded p-3 mx-3 hover:bg-green-300"
      >
        +
      </button>
      <button
        onClick={() => {
          props.dispatch({ type: ACTIONS.SESSION_DEC });
        }}
        id="session-decrement"
        className="border-4 bg-green-500 border-gray-300 rounded p-3 mx-3 hover:bg-green-300"
      >
        -
      </button>
    </div>
  );
}
