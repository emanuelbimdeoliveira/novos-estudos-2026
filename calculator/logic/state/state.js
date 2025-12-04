const state = {
  firstFactor: "",
  signal: "",
  lastFactor: "",
  valueToUse: "",
  isSignal: false,
  callToResult: false,
  callToFatorial: false,
  callToSlice: false,
  callToReset: false,
};

const setState = (key, value) => {
  state[key] = value;
};

export { state, setState };
