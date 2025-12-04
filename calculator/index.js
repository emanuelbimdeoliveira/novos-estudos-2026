import { controller } from "./logic/modules/controller/controller.js";
import { test } from "./logic/tests/test.js";
import { toPrintScreen } from "./logic/modules/functions/state-operators/stateOperators.js";

const buttons = document.querySelectorAll(".button");

const buttonClicked = (value) => {
  controller(value);
  toPrintScreen();
};

buttons.forEach((element) => {
  element.addEventListener("click", () => {
    buttonClicked(element);
  });
});

window.test = test;
