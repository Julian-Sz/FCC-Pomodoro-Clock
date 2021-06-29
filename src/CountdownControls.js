import React from "react";
import { ACTIONS } from "./App.js";

export default function CountdownControls(props) {
  return (
    <div className="text-white flex justify-around">
      <button
        id="start_stop"
        className="btn w-4/12"
        onClick={() => {
          props.dispatch({
            type: ACTIONS.SET_PAUSED,
            payload: !props.store.paused,
          });
        }}
      >
        {props.store.paused ? "Play" : "Pause"}
      </button>
      <button
        id="reset"
        className="btn w-4/12"
        onClick={() => {
          console.log("reset button pressed");
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
