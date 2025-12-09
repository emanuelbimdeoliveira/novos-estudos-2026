import { state, setState } from "../state/state.js";

const countdownController = (command) => {
  setState("statusMode", "countdown");

  const map = {
    start: () => setState("running", true),
    pause: () => setState("running", false),
    cancel: () => setState("running", false),
    restart: () => {
      setState("running", false);
    },
  };

  if (map[command]) map[command]();
};

export { countdownController };
