const buttonDecrement = document.querySelector("button[data-action = decrement]");
const buttonIncrement = document.querySelector("button[data-action = increment]");

const spanEl = document.querySelector("#value");

let counterValue = 0;

buttonDecrement.addEventListener("click", () => {
    counterValue -= 1;
    spanEl.textContent = counterValue;
});

buttonIncrement.addEventListener("click", () => {
    counterValue += 1;
    spanEl.textContent = counterValue;
});