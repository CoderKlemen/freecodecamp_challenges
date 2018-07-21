pomodoroScope = function() {
    let _timer = 25,
        _pomodoro = 25,
        _break = 5,
        flagPause = false,
        flagStop = false,
        endCountDown = 0,
        pause = 0,
        startCountDown = 0,
        startPause = 0,
        endPause = 0,
        color = 120.0,
        colorInterval = 1.0;
    
    let leadingZero = function(digit) {
      if (digit <= 9) {
        return "0" + digit;
      } 
      else {
        return digit.toString();
      }
    };
    
    let playAudio = function() {
      let audio = document.getElementById("audio-multi");
      audio.load();
      audio.play();
      console.log("audio");
    };
    
    return {
      // variables
      _timer: _timer,
      _pomodoro: _pomodoro,
      _break: _break,
      flagPause: flagPause,
      flagStop: flagStop,
      endCountDown: endCountDown,
      pause: pause,
      startCountDown: startCountDown,
      startPause: startPause,
      endPause: endPause,
      color: color,
      colorInterval: colorInterval,
      // functions
      leadingZero: leadingZero,
      playAudio: playAudio
    };
     
  }();
  
  $(document).ready(function() {
    document.getElementById("display-work").innerHTML = "  " + pomodoroScope._pomodoro + "  ";
    document.getElementById("display-break").innerHTML = "  " + pomodoroScope._break + "  ";
    document.getElementById("timer").innerHTML = "25:00";
  });
  
  
  document.getElementById("work-minus").onclick = function () {
      if (pomodoroScope._pomodoro >= 2) {
        pomodoroScope._pomodoro--;
        pomodoroScope._timer = pomodoroScope._pomodoro;
      }
      document.getElementById("display-work").innerHTML = "  " + pomodoroScope._pomodoro + "  ";
      document.getElementById("timer").innerHTML = pomodoroScope.leadingZero(pomodoroScope._timer) + ":00";
    };
  
  document.getElementById("work-plus").onclick = function () {
      if (pomodoroScope._pomodoro <= 98) {
        pomodoroScope._pomodoro++;
        pomodoroScope._timer = pomodoroScope._pomodoro;
      }
      document.getElementById("display-work").innerHTML = "  " + pomodoroScope._pomodoro + "  ";
      document.getElementById("timer").innerHTML = pomodoroScope.leadingZero(pomodoroScope._timer) + ":00";
    };
  
  document.getElementById("break-minus").onclick = function () {
      if (pomodoroScope._break >= 2) {
        pomodoroScope._break--;
        pomodoroScope._timer = pomodoroScope._break;
      }
      document.getElementById("display-break").innerHTML = "  " + pomodoroScope._break + "  ";
      document.getElementById("timer").innerHTML = pomodoroScope.leadingZero(pomodoroScope._timer) + ":00";
    };
  
  document.getElementById("break-plus").onclick = function () {
      if (pomodoroScope._break <= 98) {
        pomodoroScope._break++;
        pomodoroScope._timer = pomodoroScope._break;
      }
      document.getElementById("display-break").innerHTML = "  " + pomodoroScope._break + "  ";
      document.getElementById("timer").innerHTML = pomodoroScope.leadingZero(pomodoroScope._timer) + ":00";
    };
  
  document.getElementById("break-title").onclick = function () {
      pomodoroScope._timer = pomodoroScope._break;
      document.getElementById("display-break").innerHTML = "  " + pomodoroScope._break + "  ";
      document.getElementById("timer").innerHTML = pomodoroScope.leadingZero(pomodoroScope._timer) + ":00";
    };
  
  document.getElementById("work-title").onclick = function () {
      pomodoroScope._timer = pomodoroScope._pomodoro;
      document.getElementById("display-break").innerHTML = "  " + pomodoroScope._break + "  ";
      document.getElementById("timer").innerHTML = pomodoroScope.leadingZero(pomodoroScope._timer) + ":00";
    };
  
  
  document.getElementById("btn-pause").onclick = function () {  
    if (!pomodoroScope.flagPause) {
      pomodoroScope.flagPause = true;
      document.getElementById("btn-pause").innerHTML = "Continue";
      pomodoroScope.startPause = new Date().getTime();
      
    }
    else {
      pomodoroScope.flagPause = false;
      document.getElementById("btn-pause").innerHTML = "Pause";
      
      pomodoroScope.stopPause = new Date().getTime();
      console.log(pomodoroScope.startPause);
      console.log(pomodoroScope.stopPause);
      
      pomodoroScope.pause = pomodoroScope.stopPause - pomodoroScope.startPause;
       console.log(pomodoroScope.pause);
      pomodoroScope.endCountDown += pomodoroScope.pause;
    } 
  };
  
  
  document.getElementById("btn-stop").onclick = function () { 
    pomodoroScope.flagStop = true;
  }; 
  
  document.getElementById("btn-start").onclick = function () {
    
    pomodoroScope.flagPause = false;
    
    pomodoroScope.color = 120;
    // get the step for the color change in tomato
    // all seconds divided with the number of different shades of color
    pomodoroScope.colorInterval = 120 / (pomodoroScope._timer * 60);  
  
    document.getElementById("work-title").disabled = "disabled";
    document.getElementById("break-title").disabled = "disabled";
    document.getElementById("work-minus").disabled = "disabled";
    document.getElementById("work-plus").disabled = "disabled";
    document.getElementById("break-minus").disabled = "disabled";
    document.getElementById("break-plus").disabled = "disabled";
    document.getElementById("btn-start").disabled = "disabled";
    
    let now,
        distance,
        _minutes,
        _seconds;
    
    
    
    pomodoroScope.startCountDown = new Date().getTime();
    
    console.log(pomodoroScope.startCountDown);
    
    // use _work or _break
    pomodoroScope.endCountDown = new Date(pomodoroScope.startCountDown + pomodoroScope._timer*60000).getTime();
     
    // Update the count down every 1 second
    let x = setInterval(function() {
      
      if (!pomodoroScope.flagPause) {
          // Get todays date and time
        now = new Date().getTime();
  
        // Find the distance between now and the count down time
        distance = pomodoroScope.endCountDown - now;
  
        // calculations for minutes and seconds
        _minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        _seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
        document.getElementById("timer").innerHTML = pomodoroScope.leadingZero(_minutes) + ":" + pomodoroScope.leadingZero(_seconds);        
      }
      
      pomodoroScope.color -= pomodoroScope.colorInterval;
      
      document.getElementById("tomato").style.background = "hsl(" + Math.round(pomodoroScope.color) +", 100%, 35%)";
      
      
      if (distance <= 0 || pomodoroScope.flagStop) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = pomodoroScope.leadingZero(pomodoroScope._timer) + ":00";
        pomodoroScope.playAudio();
       
        document.getElementById("work-title").disabled = false;
        document.getElementById("break-title").disabled = false;
        document.getElementById("work-minus").disabled = false;
        document.getElementById("work-plus").disabled = false;
        document.getElementById("break-minus").disabled = false;
        document.getElementById("break-plus").disabled = false;
        document.getElementById("btn-start").disabled = false;
        document.getElementById("tomato").style.background = "hsl(120, 100%, 35%)";
        
        pomodoroScope.flagStop = false;
      }
      
    }, 1000);
  };