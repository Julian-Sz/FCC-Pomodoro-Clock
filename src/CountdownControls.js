import React from "react";
import { ACTIONS } from "./App.js";

export default function CountdownControls(props) {
  return (
    <div className="text-white flex justify-center">
      <button
        id="start_stop"
        className="border-4 bg-green-500 border-gray-300 rounded p-3 mx-3 hover:bg-green-300"
        onClick={() => {
          props.dispatch({ type: ACTIONS.PLAY_PAUSE });
        }}
      >
        {props.store.paused ? "Play" : "Pause"}
      </button>
      <button
        id="reset"
        className="border-4 bg-green-500 border-gray-300 rounded p-3 mx-3 hover:bg-green-300"
        onClick={() => {
          props.dispatch({
            type: ACTIONS.RESET,
            setcountdown: props.setcountdown,
          });
        }}
      >
        Reset
      </button>
    </div>
  );
}
