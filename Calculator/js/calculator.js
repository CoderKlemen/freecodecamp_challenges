let cs = {
    expression: "",
    history: "",
    flagDot: 0,
    flagOper: 0,
    arrayExp: [],
    middle: 0,
    maxLengthExpression: 23,
    maxLengthHistory: 50,

    checkLength: function(string, maxLength) {
      console.log(string.length);
      return string.length <= maxLength ? true : false;
    },

    addOperation: function(sign) {
      cs.history += cs.expression + sign;
      cs.expression = "";
      document.getElementById("history").innerHTML = cs.history;
      document.getElementById("expression").innerHTML = "";
    }
  }  
  
  // ce and ac
  document.getElementById("ce").onclick = function () {
      cs.expression = "";
      cs.flagDot = 0;
      document.getElementById("expression").innerHTML = "0";
    }
  
  document.getElementById("ac").onclick = function () {
      cs.expression = "";
      cs.history = "";
      cs.flagDot = 0;
      document.getElementById("expression").innerHTML = "0";
      document.getElementById("history").innerHTML = "0";
    }
  
  
  // digits and dot
  document.getElementById("one").onclick = function () {
    if ( cs.checkLength(cs.expression, cs.maxLengthExpression) ) { 
      cs.expression += "1"; 
      document.getElementById("expression").innerHTML = cs.expression;
      cs.flagOper = 0;
    };
    
  }
  
  document.getElementById("two").onclick = function () {
    if ( cs.checkLength(cs.expression, cs.maxLengthExpression) ) { 
      cs.expression += "2"; 
      document.getElementById("expression").innerHTML = cs.expression;
      cs.flagOper = 0;
    };
  }
  
  document.getElementById("three").onclick = function () {
    if ( cs.checkLength(cs.expression, cs.maxLengthExpression) ) { 
      cs.expression += "3"; 
      document.getElementById("expression").innerHTML = cs.expression;
      cs.flagOper = 0;
    };
  }
  
  document.getElementById("four").onclick = function () {
    if ( cs.checkLength(cs.expression, cs.maxLengthExpression) ) { 
      cs.expression += "4"; 
      document.getElementById("expression").innerHTML = cs.expression;
      cs.flagOper = 0;
    };
  }
  
  document.getElementById("five").onclick = function () {
    if ( cs.checkLength(cs.expression, cs.maxLengthExpression) ) { 
      cs.expression += "5"; 
      document.getElementById("expression").innerHTML = cs.expression;
      cs.flagOper = 0;
    };
  }
  
  document.getElementById("six").onclick = function () {
    if ( cs.checkLength(cs.expression, cs.maxLengthExpression) ) { 
      cs.expression += "6";
      document.getElementById("expression").innerHTML = cs.expression;
      cs.flagOper = 0;
    };
  }
  
  document.getElementById("seven").onclick = function () {
    if ( cs.checkLength(cs.expression, cs.maxLengthExpression) ) { 
      cs.expression += "7";
      document.getElementById("expression").innerHTML = cs.expression;
      cs.flagOper = 0;
    };
  }
  
  document.getElementById("eight").onclick = function () {
    if ( cs.checkLength(cs.expression, cs.maxLengthExpression) ) { 
      cs.expression += "8";
      document.getElementById("expression").innerHTML = cs.expression;
      cs.flagOper = 0;
    };
  }
  
  document.getElementById("nine").onclick = function () {
    if ( cs.checkLength(cs.expression, cs.maxLengthExpression) ) { 
      cs.expression += "9";
      document.getElementById("expression").innerHTML = cs.expression;
      cs.flagOper = 0;
    };
  }
  
  document.getElementById("zero").onclick = function () {
    if (cs.expression !== "0") {
      if ( cs.checkLength(cs.expression, cs.maxLengthExpression) ) { 
        cs.expression += "0";
        document.getElementById("expression").innerHTML = cs.expression;
        cs.flagOper = 0;
      };
    }  
  }
  
  document.getElementById("dot").onclick = function () {
    if (cs.flagDot === 0 && cs.expression !== "") {
      if ( cs.checkLength(cs.expression, cs.maxLengthExpression) ) { 
        cs.expression += ".";
        document.getElementById("expression").innerHTML = cs.expression;
        cs.flagOper = 1;
      };
    }
  }
  
  
  // operations
  document.getElementById("minus").onclick = function () {
    if (cs.flagOper !== 1) {
      if (cs.checkLength(cs.history, cs.maxLengthHistory)) {
        cs.addOperation(' - ');
      }  
    }
    cs.flagOper = 1;
  }
  
  document.getElementById("plus").onclick = function () {
    if (cs.flagOper !== 1) {
      if (cs.checkLength(cs.history, cs.maxLengthHistory)) {
        cs.addOperation(' + ');
      }
    }
    cs.flagOper = 1;
  }
  
  document.getElementById("divide").onclick = function () {
    if (cs.flagOper !== 1) {
      if (cs.checkLength(cs.history, cs.maxLengthHistory)) {
        cs.addOperation(' / ');
      }
    }
    cs.flagOper = 1;
  }
  
  document.getElementById("multiply").onclick = function () {
    if (cs.flagOper !== 1) {
      if (cs.checkLength(cs.history, cs.maxLengthHistory)) {
        cs.addOperation(' x ');
      }
    }
    cs.flagOper = 1;
  }
  
  document.getElementById("equals").onclick = function () {
    if (cs.expression !== "") {
      cs.history += cs.expression;
      cs.arrayExp = cs.history.split(" ");   
      document.getElementById("history").innerHTML = cs.history;
      document.getElementById("expression").innerHTML = "";
      cs.expression = "";
      if (cs.arrayExp[0].search(/[+-/x]/) >= 0) {
        document.getElementById("expression").innerHTML = "ERROR";
      }
      // console.log(cs.arrayExp.length);
      while (cs.arrayExp.length > 1) {
        for(let i = 0, x = cs.arrayExp.length; i < x; i++) {
          const sign = cs.arrayExp[i];
          if (sign === "x" || sign === "/" || sign === "+" || sign === "-") {
            if (sign === "x") {
              cs.middle = Number.parseFloat(cs.arrayExp[i-1],10) * Number.parseFloat(cs.arrayExp[i+1],10);  
            }
            else if (sign === "/") {
              cs.middle = Number.parseFloat(cs.arrayExp[i-1],10) / Number.parseFloat(cs.arrayExp[i+1],10);  
            }
            else if (sign === "+") {
              cs.middle = Number.parseFloat(cs.arrayExp[i-1],10) + Number.parseFloat(cs.arrayExp[i+1],10);  
            }
            else if (sign === "-") {
              cs.middle = Number.parseFloat(cs.arrayExp[i-1],10) - Number.parseFloat(cs.arrayExp[i+1],10);  
            }

            cs.arrayExp.shift();
            cs.arrayExp.shift();
            cs.arrayExp.shift();
            cs.arrayExp.unshift(cs.middle.toString());
            break;
          }
        }
      }
      cs.flagOper = 0;
      document.getElementById("expression").innerHTML = cs.arrayExp[0];
    }
  }