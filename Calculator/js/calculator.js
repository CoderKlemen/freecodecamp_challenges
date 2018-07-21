let calculatorScope = {
    expression: "",
    history: "",
    flagDot: 0,
    flagOper: 0,
    arrayExp: [],
    middle: 0
  } 
  
  /*$(document).ready(function() { 
    document.getElementByTagName("body");  
  }); */
  
  
  // ce and ac
  document.getElementById("ce").onclick = function () {
      calculatorScope.expression = "";
      calculatorScope.flagDot = 0;
      document.getElementById("expression").innerHTML = "0";
    }
  
  document.getElementById("ac").onclick = function () {
      calculatorScope.expression = "";
      calculatorScope.history = "";
      calculatorScope.flagDot = 0;
      document.getElementById("expression").innerHTML = "0";
      document.getElementById("history").innerHTML = "0";
    }
  
  
  // digits and dot
  document.getElementById("one").onclick = function () {
    calculatorScope.expression += "1";
    document.getElementById("expression").innerHTML = calculatorScope.expression;
    calculatorScope.flagOper = 0;
  }
  
  document.getElementById("two").onclick = function () {
    calculatorScope.expression += "2";
    document.getElementById("expression").innerHTML = calculatorScope.expression;
    calculatorScope.flagOper = 0;
  }
  
  document.getElementById("three").onclick = function () {
    calculatorScope.expression += "3";
    document.getElementById("expression").innerHTML = calculatorScope.expression;
    calculatorScope.flagOper = 0;
  }
  
  document.getElementById("four").onclick = function () {
    calculatorScope.expression += "4";
    document.getElementById("expression").innerHTML = calculatorScope.expression;
    calculatorScope.flagOper = 0;
  }
  
  document.getElementById("five").onclick = function () {
    calculatorScope.expression += "5";
    document.getElementById("expression").innerHTML = calculatorScope.expression;
    calculatorScope.flagOper = 0;
  }
  
  document.getElementById("six").onclick = function () {
    calculatorScope.expression += "6";
    document.getElementById("expression").innerHTML = calculatorScope.expression;
    calculatorScope.flagOper = 0;
  }
  
  document.getElementById("seven").onclick = function () {
    calculatorScope.expression += "7";
    document.getElementById("expression").innerHTML = calculatorScope.expression;
    calculatorScope.flagOper = 0;
  }
  
  document.getElementById("eight").onclick = function () {
    calculatorScope.expression += "8";
    document.getElementById("expression").innerHTML = calculatorScope.expression;
    calculatorScope.flagOper = 0;
  }
  
  document.getElementById("nine").onclick = function () {
    calculatorScope.expression += "9";
    document.getElementById("expression").innerHTML = calculatorScope.expression;
    calculatorScope.flagOper = 0;
  }
  
  document.getElementById("zero").onclick = function () {
    if (calculatorScope.expression !== "0") {
      calculatorScope.expression += "0";
      document.getElementById("expression").innerHTML = calculatorScope.expression;
      calculatorScope.flagOper = 0;
    }  
  }
  
  document.getElementById("dot").onclick = function () {
    if (calculatorScope.flagDot === 0 && calculatorScope.expression !== "") {
      calculatorScope.expression += ".";
      document.getElementById("expression").innerHTML = calculatorScope.expression;
      calculatorScope.flagDot = 1;
    }
  }
  
  
  // operations
  document.getElementById("minus").onclick = function () {
    if (calculatorScope.flagOper !== 1) {
      calculatorScope.history += calculatorScope.expression + " - ";
      calculatorScope.expression = "";
      document.getElementById("history").innerHTML = calculatorScope.history;
      document.getElementById("expression").innerHTML = "";
    }
    calculatorScope.flagOper = 1;
  }
  
  document.getElementById("plus").onclick = function () {
    if (calculatorScope.flagOper !== 1) {
      calculatorScope.history += calculatorScope.expression + " + ";
      calculatorScope.expression = "";
      document.getElementById("history").innerHTML = calculatorScope.history;
      document.getElementById("expression").innerHTML = "";
    }
    calculatorScope.flagOper = 1;
  }
  
  document.getElementById("divide").onclick = function () {
    if (calculatorScope.flagOper !== 1) {
      calculatorScope.history += calculatorScope.expression + " / ";
      calculatorScope.expression = "";
      document.getElementById("history").innerHTML = calculatorScope.history;
      document.getElementById("expression").innerHTML = "";
    }
    calculatorScope.flagOper = 1;
  }
  
  document.getElementById("multiply").onclick = function () {
    if (calculatorScope.flagOper !== 1) {
      calculatorScope.history += calculatorScope.expression + " x ";
      calculatorScope.expression = "";
      document.getElementById("history").innerHTML = calculatorScope.history;
      document.getElementById("expression").innerHTML = "";
    }
    calculatorScope.flagOper = 1;
  }
  
  document.getElementById("equals").onclick = function () {
    if (calculatorScope.expression !== "") {
      calculatorScope.history += calculatorScope.expression;
      calculatorScope.arrayExp = calculatorScope.history.split(" ");   
      document.getElementById("history").innerHTML = calculatorScope.history;
      document.getElementById("expression").innerHTML = "";
      calculatorScope.expression = "";
      if (calculatorScope.arrayExp[0].search(/[+-/x]/) >= 0) {
        document.getElementById("expression").innerHTML = "ERROR";
      }
      // console.log(calculatorScope.arrayExp.length);
      while (calculatorScope.arrayExp.length > 1) {
        for(let i = 0, x = calculatorScope.arrayExp.length; i < x; i++) {
          if (calculatorScope.arrayExp[i] === "x" || calculatorScope.arrayExp[i] === "/") {
            if (calculatorScope.arrayExp[i] === "x") {
              calculatorScope.middle = Number.parseFloat(calculatorScope.arrayExp[i-1],10) * Number.parseFloat(calculatorScope.arrayExp[i+1],10);
              calculatorScope.arrayExp.shift();
              calculatorScope.arrayExp.shift();
              calculatorScope.arrayExp.shift();
              calculatorScope.arrayExp.unshift(calculatorScope.middle.toString());
              break;
            }
            else if (calculatorScope.arrayExp[i] === "/") {
              calculatorScope.middle = Number.parseFloat(calculatorScope.arrayExp[i-1],10) / Number.parseFloat(calculatorScope.arrayExp[i+1],10);
              calculatorScope.arrayExp.shift();
              calculatorScope.arrayExp.shift();
              calculatorScope.arrayExp.shift();
              calculatorScope.arrayExp.unshift(calculatorScope.middle.toString());
              break;
            }
          }
          else if (calculatorScope.arrayExp[i] === "+" || calculatorScope.arrayExp[i] === "-") {
            if (calculatorScope.arrayExp[i] === "+") {
              calculatorScope.middle = Number.parseFloat(calculatorScope.arrayExp[i-1],10) + Number.parseFloat(calculatorScope.arrayExp[i+1],10);
              calculatorScope.arrayExp.shift();
              calculatorScope.arrayExp.shift();
              calculatorScope.arrayExp.shift();
              calculatorScope.arrayExp.unshift(calculatorScope.middle.toString());
              break;
            }
            else if (calculatorScope.arrayExp[i] === "-") {
              calculatorScope.middle = Number.parseFloat(calculatorScope.arrayExp[i-1],10) - Number.parseFloat(calculatorScope.arrayExp[i+1],10);
              calculatorScope.arrayExp.shift();
              calculatorScope.arrayExp.shift();
              calculatorScope.arrayExp.shift();
              calculatorScope.arrayExp.unshift(calculatorScope.middle.toString());
              break;
            }
          }
          //console.log(calculatorScope.arrayExp);
        }
      }
      document.getElementById("expression").innerHTML = calculatorScope.arrayExp[0];
    }
  }