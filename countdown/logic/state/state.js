const state = {
  statusMode: "chronometer",
  running: false,
  elapsedTime: 0,
  countdownRemaining: "",
};

const setState = (key, value) => {
  state[key] = value;
};

export { state, setState };
