import { state, setState } from "../../../state/state.js";

const screen = document.querySelector(".screen");
let printScreen = "";

const updateSignal = () => {
  if (state.valueToUse != "=") setState("signal", state.valueToUse);
};

const slice = () => {
  if (state.lastFactor) {
    setState("lastFactor", String(state.lastFactor).slice(0, -1));
  } else if (state.signal) {
    setState("signal", String(state.signal).slice(0, -1));
  } else if (state.firstFactor) {
    setState("firstFactor", String(state.firstFactor).slice(0, -1));
  } else {
    return;
  }
};

const reset = (resetAll) => {
  if (resetAll) setState("lastFactor", "");
  setState("firstFactor", state.lastFactor);
  setState("signal", "");
  setState("lastFactor", "");
};

const parseNumber = (value) => {
  if (value) setState(value, Number.parseFloat(value));
};

const toPrintScreen = () => {
  printScreen = `${state.firstFactor} ${state.signal} ${state.lastFactor}`;
  screen.innerText = printScreen.replace(/\./g, ",");
};

export { updateSignal, slice, reset, parseNumber, toPrintScreen };
