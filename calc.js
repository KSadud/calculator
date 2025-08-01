const one = document.querySelector("#one-btn");
const two = document.querySelector("#two-btn");
const three = document.querySelector("#three-btn");
const four = document.querySelector("#four-btn");
const five = document.querySelector("#five-btn");
const six = document.querySelector("#six-btn");
const seven = document.querySelector("#seven-btn");
const eight = document.querySelector("#eight-btn");
const nine = document.querySelector("#nine-btn");
const period = document.querySelector("#period-btn");
const zero = document.querySelector("#zero-btn");
const clear = document.querySelector("#clear-btn");
const backspace = document.querySelector("#backspace-btn");
const negPos = document.querySelector("#neg-pos-btn");
const percentage = document.querySelector("percentage-btn");
const exp = document.querySelector("#exp-btn");
const divide = document.querySelector("#divide-btn");
const multiply = document.querySelector("#multiply-btn");
const minus = document.querySelector("#minus-btn");
const plus = document.querySelector("#plus-btn");
const equal = document.querySelector("#equals-btn");
const history = document.querySelector("#history-input");
const current = document.querySelector("#current-input");


five.addEventListener('click', () => {
    current.textContent += "5";
    history.textContent += "5"
});

clear.addEventListener('click', () => {
    current.textContent = "";
});

clear.addEventListener('dblclick', () => {
    history.textContent = "";
})
