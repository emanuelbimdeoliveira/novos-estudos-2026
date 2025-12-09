import { state } from "../state/state.js";

const screen = document.querySelector(".screen");

const updateScreen = () => {
  const time = formatTime(state.elapsedTime);
  screen.innerText = time;
};

const formatTime = (ms) => {
  const milliseconds = (ms % 1000) / 10;
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const msStr = String(milliseconds).padStart(2, "0");

  const s = String(seconds % 60).padStart(2, "0");
  const m = String(minutes % 60).padStart(2, "0");
  const h = String(hours).padStart(2, "0");

  return `${h}:${m}:${s}.${msStr}`;
};

export { updateScreen };
