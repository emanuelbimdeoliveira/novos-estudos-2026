import { controller } from "../modules/controller/controller.js";
import { state } from "../state/state.js";

const { firstFactor, signal, lastFactor } = state;

function test() {
  controller({ innerText: 6, className: "number" });
  console.log(`${firstFactor} ${signal} ${lastFactor}`);

  controller({ innerText: "*", className: "" });
  console.log(`${firstFactor} ${signal} ${lastFactor}`);

  controller({ innerText: 2, className: "number" });
  console.log(`${firstFactor} ${signal} ${lastFactor}`);

  controller({ innerText: "=", className: "" });
  console.log(`${firstFactor} ${signal} ${lastFactor}`);
}

export { test };
