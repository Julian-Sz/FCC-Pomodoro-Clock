import React, { useState, useEffect, useRef, useReducer } from "react";
import BreakControls from "./BreakControls";
import SessionControls from "./SessionControls";
import CountdownControls from "./CountdownControls";
import Countdown from "./Countdown.js";
import "tailwindcss/tailwind.css";
import "./App.css";

export const ACTIONS = {
  SET_PAUSED: "set-paused",
  RESET: "reset",
  SET_BREAK: "set-break",
  SESSION_INC: "session-inc",
  SESSION_DEC: "session-dec",
  BREAK_INC: "break-inc",
  BREAK_DEC: "break-dec",
};

const DEFAULT_SESSIONLENGTH = 1500;
const DEFAULT_BREAKLENGTH = 300;

const reducer = (prev, action) => {
  console.log("action dispatched", action);
  switch (action.type) {
    case ACTIONS.SET_PAUSED:
      return { ...prev, paused: action.payload };
    case ACTIONS.RESET:
      action.setcountdown((prev) => ({
        ...prev,
        seconds: DEFAULT_SESSIONLENGTH,
      }));
      let audioElement = document.getElementById("beep");
      audioElement.pause();
      audioElement.currentTime = 0;

      return {
        ...prev,
        paused: true,
        break: false,
        breakLength: DEFAULT_BREAKLENGTH,
        sessionLength: DEFAULT_SESSIONLENGTH,
      };
    case ACTIONS.SESSION_INC:
      if (!prev.paused || prev.sessionLength >= 3600) {
        return prev;
      }
      return { ...prev, sessionLength: prev.sessionLength + 60 };
    case ACTIONS.SESSION_DEC:
      if (!prev.paused || prev.sessionLength <= 60) {
        return prev;
      }
      return { ...prev, sessionLength: prev.sessionLength - 60 };
    case ACTIONS.BREAK_INC:
      if (!prev.paused || prev.breakLength >= 3600) {
        return prev;
      }
      return { ...prev, breakLength: prev.breakLength + 60 };
    case ACTIONS.BREAK_DEC:
      if (!prev.paused || prev.breakLength <= 60) {
        return prev;
      }
      return { ...prev, breakLength: prev.breakLength - 60 };
    case ACTIONS.SET_BREAK:
      console.log("set break", action.payload, "end", prev);

      if (prev.break) {
        action.setcountdown((prev) => ({
          ...prev,
          seconds: DEFAULT_SESSIONLENGTH,
        }));
      } else {
        action.setcountdown((prev) => ({
          ...prev,
          seconds: DEFAULT_BREAKLENGTH,
        }));
      }
      return { ...prev, break: action.payload };
    default:
      return prev;
  }
};

function App() {
  const [state, setState] = useState({
    seconds: DEFAULT_SESSIONLENGTH,
  });

  const [store, dispatch] = useReducer(reducer, {
    paused: true,
    break: false,
    sessionLength: DEFAULT_SESSIONLENGTH,
    breakLength: DEFAULT_BREAKLENGTH,
  });

  useEffect(() => {
    if (!store.break) {
      console.log("set seconds", store.sessionLength);
      setState((prev) => ({ ...prev, seconds: store.sessionLength }));
    }
  }, [store.sessionLength, store.break]);

  useEffect(() => {
    if (store.break) {
      console.log("set seconds", store.breakLength);
      setState((prev) => ({ ...prev, seconds: store.breakLength }));
    }
  }, [store.breakLength, store.break]);

  const intervalId = useRef(undefined);
  useEffect(() => {
    if (!store.paused) {
      intervalId.current = window.setInterval(() => {
        setState((prev) => {
          return { ...prev, seconds: prev.seconds - 1 };
        });
      }, 1000);
    } else {
      window.clearInterval(intervalId.current);
    }
  }, [store.paused]);

  useEffect(() => {
    if (state.seconds < 1) {
      console.log("this useEffect is triggered", state.seconds);
      let audioElement = document.getElementById("beep");
      audioElement.volume = 0.1;
      audioElement.play();
      dispatch({
        type: ACTIONS.SET_BREAK,
        payload: !store.break,
        setcountdown: setState,
      });
    }
  }, [store.break, state.seconds]);

  return (
    <div className="App container mx-auto w-screen h-screen text-center flex flex-col justify-center">
      <div className="flex justify-center">
        <SessionControls store={store} dispatch={dispatch} />
        <BreakControls store={store} dispatch={dispatch} />
      </div>
      <Countdown seconds={state.seconds} break={store.break} />
      <CountdownControls
        store={store}
        dispatch={dispatch}
        setcountdown={setState}
      />
      <audio id="beep" src="alarm.wav" type="audio/wav" className="hidden">
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default App;
