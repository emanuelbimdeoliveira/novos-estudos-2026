import { state } from "../../../state/state.js";
import { reset, slice, updateSignal } from "../state-operators/stateOperators.js";
import { executCalc } from "../operations/operations.js";

const controlOperation = () => {
  if (state.callToReset) reset(true);
  else if (state.callToSlice) slice();
  else if (state.callToFatorial) {
    updateSignal();
    executCalc();
  } else if (!state.lastFactor) updateSignal();
  else if (state.callToResult) executCalc();
  else {
    executCalc();
    updateSignal();
  }
};

export { controlOperation };
