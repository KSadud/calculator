// Variable creation for buttons and outputs

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
const percentage = document.querySelector("#percentage-btn");
const exp = document.querySelector("#exp-btn");
const divide = document.querySelector("#divide-btn");
const multiply = document.querySelector("#multiply-btn");
const minus = document.querySelector("#minus-btn");
const plus = document.querySelector("#plus-btn");
const equal = document.querySelector("#equals-btn");
const resultText = document.querySelector("#result-output");
const currentText = document.querySelector("#current-output");
let result = "";
let current = "";
let oper = null;
 
// operator event listeners

equal.addEventListener('click', () => {
    if (current == "" || current == "You know better than that" || current == NaN) {
        current = "";
        result = "";
        resultText.textContent = "";
        currentText.textContent ="";
    } else {
        equals();
    }
})

plus.addEventListener('click', () => {
    oper = "+";
    plus.disabled= false;
    if (current == "" || current == "You know better than that" || current == NaN) {
        current = "";
        result = "";
        resultText.textContent = "";
        currentText.textContent ="";
        plus.disabled= true;
    } 
     else if (result != "" && current != "") {
        result = current;
        resultText.textContent = current + " + ";
        current = "";
        currentText.textContent = "";
    } else if (result != "") {
        equals();
        result = current;
        resultText.textContent = current + " + ";
        current = "";
        currentText.textContent = "";
    }
        else {
    result = current;
    resultText.textContent = current + " + ";
    current = "";
    currentText.textContent = "";
    }
});

minus.addEventListener('click', () => {
    oper = "-";
    minus.disabled= false;
    if (current == "" || current == "You know better than that" || current == NaN) {
        current = "";
        result = "";
        resultText.textContent = "";
        currentText.textContent ="";
        minus.disabled= true;
    }
     else if (result != "" && current != "") {
        result = current;
        resultText.textContent = current + " - ";
        current = "";
        currentText.textContent = "";
    } else if (result != "") {
        equals();
        result = current;
        resultText.textContent = current + " - ";
        current = "";
        currentText.textContent = "";
    }
        else {
    result = current;
    resultText.textContent = current + " - ";
    current = "";
    currentText.textContent = "";
    }
});

multiply.addEventListener('click', () => {
    oper = "*";
    multiply.disabled= false;
    if (current == "" || current == "You know better than that" || current == NaN) {
        current = "";
        result = "";
        resultText.textContent = "";
        currentText.textContent ="";
        multiply.disabled= true;
    }
     else if (result != "" && current != "") {
        result = current;
        resultText.textContent = current + " x ";
        current = "";
        currentText.textContent = "";
    } else if (result != "") {
        equals();
        result = current;
        resultText.textContent = current + " x ";
        current = "";
        currentText.textContent = "";
    }
        else {
    result = current;
    resultText.textContent = current + " x ";
    current = "";
    currentText.textContent = "";
    }
});

divide.addEventListener('click', () => {
    oper = "/";
    divide.disabled= false;
    if (current == "" || current == "You know better than that" || current == NaN) {
        current = "";
        result = "";
        resultText.textContent = "";
        currentText.textContent ="";
        divide.disabled= true;
    }
    else if (result != "" && current != "") {
        result = current;
        resultText.textContent = current + " / ";
        current = "";
        currentText.textContent = "";
    } else if (result != "") {
        equals();
        result = current;
        resultText.textContent = current + " / ";
        current = "";
        currentText.textContent = "";
    }
        else {
    result = current;
    resultText.textContent = current + " / ";
    current = "";
    currentText.textContent = "";
    }
});
/*
exp.addEventListener('click', () => {
    oper = "^";
    if (result != "" && current != "") {
        result = current;
        resultText.textContent = current + "^";
        current = "";
        currentText.textContent = "";
    } else if (result != "") {
        equals();
        result = current;
        resultText.textContent = current + "^";
        current = "";
        currentText.textContent = "";
    }
        else {
    result = current;
    resultText.textContent = current + "^";
    current = "";
    currentText.textContent = "";
    }
}); */

//number event listeners


nine.addEventListener('click', () => {
    current += "9";
    currentText.textContent = current;
});

eight.addEventListener('click', () => {
    current += "8";
    currentText.textContent = current;
});

seven.addEventListener('click', () => {
    current += "7";
    currentText.textContent = current;
});

six.addEventListener('click', () => {
    current += "6";
    currentText.textContent = current;
});

five.addEventListener('click', () => {
    current += "5";
    currentText.textContent = current;
});

four.addEventListener('click', () => {
    current += "4";
    currentText.textContent = current;
});

three.addEventListener('click', () => {
    current += "3";
    currentText.textContent = current;
});

two.addEventListener('click', () => {
    current += "2";
    currentText.textContent = current;
});

one.addEventListener('click', () => {
    current += "1";
    currentText.textContent = current;
});

zero.addEventListener('click', () => {
    if (current != "" || result != 0) {
    current += "0";
    currentText.textContent = current;
    }
});

period.addEventListener('click', () => {
    if (current != "" && !current.includes(".") ) {
        current += ".";
        currentText.textContent = current;
    }
    
})

//clear and delete button event listeners

clear.addEventListener('click', () => {
    current = "";
    currentText.textContent = "";
    clear.textContent = "AC";
});


clear.addEventListener('dblclick', () => {
    result = "";
    resultText.textContent = "";
    clear.textContent = "Clear";
})


backspace.addEventListener('click', () => {
    backspaceKey();
    currentText.textContent = current;
});

// operator and backspace functions

function backspaceKey() {
    if (current.length > 0) {
        let currentArr = current.split('');
        currentArr.pop();
        current = currentArr.join('');
    }
}


const add = function (a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
}

const multiplication = function (a, b) {
    return a * b;
}

const division = function (a, b) {
    if (b === 0) {
        return 'You know better than that';
    } else {
    return a / b;
    }
}

/*
const power = function (a,b) {
    return Math.pow(a,b);
} */

// special buttons event listeners

negPos.addEventListener('click', () => {
    if (current != "" && current != 0) {
    current = Number(current) * -1;
    currentText.textContent = current;
}})

percentage.addEventListener('click', () => {
    if (current != "" && current != 0) {
    current = Number(current) / 100;
    currentText.textContent = current;
}})

const equals = () => {
    if (oper == "+") {
        resultText.textContent += current;
        current = add(Number(result), Number(current));
        currentText.textContent = current;
    } else if (oper == "-") {
        resultText.textContent += current;
        current = subtract(Number(result), Number(current));
        currentText.textContent = current;
    } else if (oper == "*") {
        resultText.textContent += current;
        current = multiplication(Number(result), Number(current));
        currentText.textContent = current;
    } else if (oper == "/") {
        resultText.textContent += current;
        current = division(Number(result), Number(current));
        currentText.textContent = current;
    }
} 