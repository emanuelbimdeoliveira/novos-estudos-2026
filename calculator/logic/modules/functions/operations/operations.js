import { state, setState } from "../../../state/state.js";
import { parseNumber, reset } from "../state-operators/stateOperators.js";

const executCalc = () => {
  parseNumber(state.firstFactor);
  parseNumber(state.lastFactor);

  switch (state.signal) {
    case "+":
      setState("lastFactor", state.firstFactor + state.lastFactor);
      break;
    case "-":
      setState("lastFactor", state.firstFactor - state.lastFactor);
      break;
    case "X":
      setState("lastFactor", state.firstFactor * state.lastFactor);
      break;
    case "/":
      setState("lastFactor", state.firstFactor / state.lastFactor);
      break;
    case "^":
      setState("lastFactor", state.firstFactor ** state.lastFactor);
      break;
    case "!":
      setState("lastFactor", fatoralCalc(state.firstFactor));
      break;
  }
  reset();
};

const fatoralCalc = (value) => {
  const entry = value;
  let result;
  for (let index = entry - 1; index > 0; index--) {
    if (index == entry - 1) result = entry * index;
    else result = result * index;
  }
  return result;
};

export { executCalc, fatoralCalc };
