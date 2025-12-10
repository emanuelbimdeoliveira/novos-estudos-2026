import { calculateFromDate, calculateFromMinutes } from "./dateFormaters.js";

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

const formatInput = () => {
  const dateInput = document.querySelector("#countdown-date");
  const minutesInput = document.querySelector("#countdown-minutes");

  let ms = null;

  if (dateInput.value) {
    ms = calculateFromDate(dateInput.value);
  } else if (minutesInput.value) {
    ms = calculateFromMinutes(minutesInput.value);
  }

  if (!ms) return;

  return ms;
};

export { formatInput, formatTime };
