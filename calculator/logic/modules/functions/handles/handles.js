import { state, setState } from "../../../state/state.js";
import { controlOperation } from "../control-opetarion/controlOperation.js";

const handleValue = (value) => {
  setState("isSignal", value.className.indexOf("number") == -1);
  setState("valueToUse", value.innerText);
  setState("callToResult", state.valueToUse == "=");
  setState("callToFatorial", state.valueToUse == "!");
  setState("callToReset", state.valueToUse == "C");
  setState("callToSlice", state.valueToUse == "<");
};

const handleNumber = () => {
  setState("valueToUse", state.valueToUse.replace(",", "."));

  if (!state.signal) {
    setState("firstFactor", (state.firstFactor += state.valueToUse));
  } else {
    setState("lastFactor", (state.lastFactor += state.valueToUse));
  }
};

const handleSignal = () => {
  if (!state.firstFactor) return;
  else {
    controlOperation();
  }
};

export { handleValue, handleNumber, handleSignal };
