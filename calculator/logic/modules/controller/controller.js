import { handleValue, handleNumber, handleSignal } from "../functions/handles/handles.js";
import { state } from "../../state/state.js";

const controller = (value) => {
  handleValue(value);

  if (state.isSignal) {
    handleSignal();
  } else {
    handleNumber();
  }
};

export { controller };
