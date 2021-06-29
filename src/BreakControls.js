import React from "react";
import { ACTIONS } from "./App.js";

export default function BreakControls(props) {
  let minutes = Math.floor(props.store.breakLength / 60);
  return (
    <div className="mx-1 flex-1 grid grid-rows-2 grid-cols-3 text-center justify-items-center content-center align-middle">
      <h2 id="break-label" className="col-span-3">
        Break Length
      </h2>

      <button
        onClick={() => {
          props.dispatch({ type: ACTIONS.BREAK_INC });
        }}
        id="break-increment"
        className="btn"
      >
        <i className="bi bi-plus-lg"></i>
      </button>
      <span id="break-length" className="text-xl">
        {minutes}
      </span>
      <button
        onClick={() => {
          props.dispatch({ type: ACTIONS.BREAK_DEC });
        }}
        id="break-decrement"
        className="btn"
      >
        <i className="bi bi-dash-lg"></i>
      </button>
    </div>
  );
}
