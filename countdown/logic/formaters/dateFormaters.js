const calculateFromDate = (inputValue) => {
  let target = new Date(inputValue);
  let now = Date.now();
  let diff = target - now;

  return diff;
};

const calculateFromMinutes = (inputValue) => {
  let diff = Number(inputValue) * 60000;

  return diff;
};

export { calculateFromDate, calculateFromMinutes };
