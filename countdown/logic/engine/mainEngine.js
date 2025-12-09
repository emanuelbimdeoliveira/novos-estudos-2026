import { state } from "../state/state.js";
import { updateScreen } from "../display/updateScreen.js";

import { chronometerEngine } from "./chronometer.js";
import { countdownEngine } from "./countdown.js";

const engine = () => {
  const mainEngine = () => {
    if (!state.running) return;

    if (state.statusMode === "chronometer") chronometerEngine();
    if (state.statusMode === "countdown") countdownEngine();

    updateScreen();
  };

  setInterval(() => {
    mainEngine();
  }, 100);
};

export { engine };
