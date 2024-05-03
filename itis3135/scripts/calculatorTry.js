let calcDisplay = "";
let operationType = "";
let num1, num2, num3 = 0;

// Concatenates number input to display div
function numInput(num) {
    calcDisplay += num;
    document.getElementById("calcDisplay").innerHTML = calcDisplay;
}

// Stores first number and sets operation type
function setOperation(operationType) { 
    num1 = Number(document.getElementById("calcDisplay").innerHTML);
    this.operationType = operationType;
    clearCalc();
}

// Calculates result
function calculate() {
    num2 = Number(document.getElementById("calcDisplay").innerHTML);
    clearCalc();
    if (this.operationType === "multiply") {
        num3 = num1 * num2;
    } else if (this.operationType === "divide") {
        num3 = num1 / num2;
    } else if (this.operationType === "add") {
        num3 = num1 + num2;
    } else if (this.operationType === "subtract") {
        num3 = num1 - num2;
    }
    document.getElementById("calcDisplay").innerHTML = num3;
    console.log("num3:", num3);
}

// Converts number to decimal
function decimal() {
    calcDisplay += ".";
}

// Clears calculator display
function clearCalc() {
    calcDisplay = "";
    document.getElementById("calcDisplay").innerHTML = "";
}

// onclick event listener for every button
document.addEventListener('DOMContentLoaded', function() {
    // multiply button
    var multiplyBtn = document.getElementById('multiply');
    multiplyBtn.addEventListener('click', function() {
        setOperation('multiply');
    });
    // divide button
    var divideBtn = document.getElementById('divide');
    divideBtn.addEventListener('click', function() {
        setOperation('divide');
    });
    // add button
    var addBtn = document.getElementById('add');
    addBtn.addEventListener('click', function() {
        setOperation('add');
    });
    // subtract button
    var subtractBtn = document.getElementById('subtract');
    subtractBtn.addEventListener('click', function() {
        setOperation('subtract');
    });
    // 6 button
    var sixBtn = document.getElementById('six');
    sixBtn.addEventListener('click', function() {
        numInput(JSON.stringify(6));
    });
    // 7 button
    var sevenBtn = document.getElementById('seven');
    sevenBtn.addEventListener('click', function() {
        numInput(JSON.stringify(7));
    });
    // 8 button
    var eightBtn = document.getElementById('eight');
    eightBtn.addEventListener('click', function() {
        numInput(JSON.stringify(8));
    });
    // 9 button
    var nineBtn = document.getElementById('nine');
    nineBtn.addEventListener('click', function() {
        numInput(JSON.stringify(9));
    });
    // 2 button
    var twoBtn = document.getElementById('two');
    twoBtn.addEventListener('click', function() {
        numInput(JSON.stringify(2));
    });
    // 3 button
    var threeBtn = document.getElementById('three');
    threeBtn.addEventListener('click', function() {
        numInput(JSON.stringify(3));
    });
    // 4 button
    var fourBtn = document.getElementById('four');
    fourBtn.addEventListener('click', function() {
        numInput(JSON.stringify(4));
    });
    // 5 button
    var fiveBtn = document.getElementById('five');
    fiveBtn.addEventListener('click', function() {
        numInput(JSON.stringify(5));
    });
    // 0 button
    var zeroBtn = document.getElementById('zero');
    zeroBtn.addEventListener('click', function() {
        numInput(JSON.stringify(0));
    });
    // 1 button
    var oneBtn = document.getElementById('one');
    oneBtn.addEventListener('click', function() {
        numInput(JSON.stringify(1));
    });
    // decimal button
    var decimalBtn = document.getElementById('decimal');
    decimalBtn.addEventListener('click', function() {
        decimal();
    });
    // equals button
    var equalsBtn = document.getElementById('equals');
    equalsBtn.addEventListener('click', function() {
        calculate();
    });
    // clear button
    var clearBtn = document.getElementById('clear');
    clearBtn.addEventListener('click', function() {
        clearCalc();
    });
});
