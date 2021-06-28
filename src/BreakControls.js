import React from "react";
import { ACTIONS } from "./App.js";

export default function BreakControls(props) {
  let minutes = Math.floor(props.store.breakLength / 60);
  return (
    <div className="mx-5 flex-1 text-left">
      <h2 id="break-label">Break Length</h2>
      <div id="break-length">{minutes}</div>
      <button
        onClick={() => {
          props.dispatch({ type: ACTIONS.BREAK_INC });
        }}
        id="break-increment"
        className="border-4 bg-green-500 border-gray-300 rounded p-3 mx-3 hover:bg-green-300"
      >
        +
      </button>
      <button
        onClick={() => {
          props.dispatch({ type: ACTIONS.BREAK_DEC });
        }}
        id="break-decrement"
        className="border-4 bg-green-500 border-gray-300 rounded p-3 mx-3 hover:bg-green-300"
      >
        -
      </button>
    </div>
  );
}
