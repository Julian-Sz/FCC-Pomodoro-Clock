import React, { useState, useEffect, useRef, useReducer } from "react";
import BreakControls from "./BreakControls";
import SessionControls from "./SessionControls";
import CountdownControls from "./CountdownControls";
import Countdown from "./Countdown.js";
import "tailwindcss/tailwind.css";
import "./App.css";

export const ACTIONS = {
  PLAY_PAUSE: "play-pause",
  RESET: "reset",
  TOGGLE_BREAK: "toggle-break",
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
    case ACTIONS.PLAY_PAUSE:
      return { ...prev, paused: !prev.paused };
    case ACTIONS.RESET:
      action.setcountdown((prev) => ({
        ...prev,
        seconds: DEFAULT_SESSIONLENGTH,
      }));
      return {
        ...prev,
        paused: true,
        breakLength: DEFAULT_BREAKLENGTH,
        sessionLength: DEFAULT_SESSIONLENGTH,
      };
    case ACTIONS.SESSION_INC:
      if (!prev.paused) {
        return prev;
      }
      return { ...prev, sessionLength: prev.sessionLength + 60 };
    case ACTIONS.SESSION_DEC:
      if (!prev.paused) {
        return prev;
      }
      return { ...prev, sessionLength: prev.sessionLength - 60 };
    case ACTIONS.BREAK_INC:
      if (!prev.paused) {
        return prev;
      }
      return { ...prev, breakLength: prev.breakLength + 60 };
    case ACTIONS.BREAK_DEC:
      if (!prev.paused) {
        return prev;
      }
      return { ...prev, breakLength: prev.breakLength - 60 };
    case ACTIONS.TOGGLE_BREAK:
      console.log("Toggle break", !prev.break, "end", prev);
      return { ...prev, break: !prev.break };
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
      setState((prev) => ({ ...prev, seconds: store.sessionLength }));
    }
  }, [store.sessionLength, store.break]);

  useEffect(() => {
    if (store.break) {
      setState((prev) => ({ ...prev, seconds: store.breakLength }));
    }
  }, [store.breakLength, store.break]);

  const intervalId = useRef(undefined);
  useEffect(() => {
    if (!store.paused) {
      // console.log("runnin", intervalId.current);
      intervalId.current = window.setInterval(() => {
        setState((prev) => {
          if (prev.seconds < 1) {
            console.log("toggle action dispatched because seconds < 1");
            dispatch({ type: ACTIONS.TOGGLE_BREAK });
          }
          return { ...prev, seconds: prev.seconds - 1 };
        });
      }, 1000);
    } else {
      // console.log("chillin", intervalId.current);
      window.clearInterval(intervalId.current);
    }
  }, [store.paused]);

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
    </div>
  );
}

export default App;
