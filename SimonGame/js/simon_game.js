let simonSpace = {
    turnedOn: false,
    strictOn: false,
    started: false,
    gameCounter: 0,
    gameLength: 20,
    sequenceCounter: 0,
    randomGame: [],
    playerGame: [],
    sequence: [],
    timeouts: [],
    execution: true,
    recursionCounter: 0,
    
    playSoundGreen: function() {
      let simonSound1 = document.getElementById("simonSound1");
      simonSound1.load();
      simonSound1.play();
    },
    
    playSoundRed: function() {
      let simonSound2 = document.getElementById("simonSound2");
      simonSound2.load();
      simonSound2.play();
    },
    
    playSoundBlue: function() {
      let simonSound3 = document.getElementById("simonSound3");
      simonSound3.load();
      simonSound3.play();
    },
    
    playSoundYellow: function() {
      let simonSound4 = document.getElementById("simonSound4");
      simonSound4.load();
      simonSound4.play();
    },
      
    buildRandomGame: function (gameLength) {
      let game = [];
      for ( let i = 0; i < gameLength; i++) {
        game[i] = Math.floor(Math.random()*4);
      }
      return game;
    },
    
    playSequence: function(index) {
      simonSpace.sequence = [];
      simonSpace.timeouts = [];
      simonSpace.sequence = simonSpace.randomGame.slice(0,index+1);
      
      simonSpace.sequence.forEach(function(item, index) {
        return  function () {
          simonSpace.activeTile(item, index);
        }();
      })
    }, 
  
    checkGame: async function() {
      // compare player input with the sequence
      if (simonSpace.compareArrays(simonSpace.playerGame, simonSpace.randomGame.slice(0,simonSpace.gameCounter+1))) {
        // continue displaying the sequence
        if (simonSpace.gameCounter+1 < simonSpace.gameLength) {
          simonSpace.gameCounter++;
          simonSpace.playerGame = [];
          simonSpace.sequenceCounter = 0;
          if (simonSpace.gameCounter <= 8){
            $("#text-moves").text("0" + (simonSpace.gameCounter + 1) );
          }
          else {
            $("#text-moves").text(simonSpace.gameCounter+1);
          }  
          simonSpace.playSequence(simonSpace.gameCounter);
        }
        // win the game
        else {
          simonSpace.clearTimeouts();
          $("#text-moves").text("WIN");
          simonSpace.delay( function () {
            $("#text-moves").text("--");
          }, 1500);  
          simonSpace.clearColors();
          simonSpace.execution = true;    
          simonSpace.clearPlayer();
          simonSpace.gameCounter = 0;
          simonSpace.randomGame = simonSpace.buildRandomGame(simonSpace.gameLength);           
          simonSpace.delay( function () {
            $("#text-moves").text("01");
            simonSpace.playSequence(0);
          }, 2500);      
        }
        
      }
      // wrong input
      else {
        // end game if strict mode
        if (simonSpace.strictOn) {
          simonSpace.started = false;
          simonSpace.clearPlayer();
          $("#text-moves").text("END");
          simonSpace.delay( function () {
            $("#text-moves").text("--");
          }, 1500);
        }
        // repeat the sequence
        else {
          simonSpace.clearPlayer();
          $("#text-moves").text("!!!");
          await simonSpace.delay( function () {
            if (simonSpace.gameCounter <= 8){
              $("#text-moves").text("0" + (simonSpace.gameCounter + 1) );
            }
            else {
              $("#text-moves").text(simonSpace.gameCounter+1);
            }
            }, 1000);
          await simonSpace.playSequence(simonSpace.gameCounter);       
        }
      }
    },
  
    compareArrays: function (arr1, arr2) {
      let lengthArr1 = arr1.length,
          lengthArr2 = arr2.length;
  
      if (lengthArr1 !== lengthArr2) { 
        return false;
      };
  
      for (let i = 0; i < lengthArr1; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
      return true;
    },
  
    activeTile: function(tile, index) {
      switch(tile) {
        case 0:
          simonSpace.delay( function () {
            simonSpace.lightGreen();
          }, (index + 1) * 1000);
          break;
        case 1:
          simonSpace.delay( function () {
            simonSpace.lightRed();
          }, (index + 1) * 1000);
          break;
        case 2:
          simonSpace.delay( function () {
            simonSpace.lightBlue();
          }, (index + 1) * 1000);
          break;
        case 3:        
          simonSpace.delay( function () {
            simonSpace.lightYellow();
          }, (index + 1) * 1000);
          break;
        default:
          break;
      }
    },
  
    pauseBetweenBleeps: ( function() {  
      return function() {
        return ;
      };
    })(),
    
    delay: ( function() {
      let timer = 0;
      return function(callback, ms) {
        simonSpace.timeouts.push(setTimeout(callback, ms));
      };
    })(),
    
    clearTimeouts: function() {
      simonSpace.timeouts.forEach( function(item) {
        clearTimeout(item);
      });    
      simonSpace.delay( function () {
      }, 500);
      simonSpace.timeouts = [];
    },
    
    clearColors: function() {
      simonSpace.darkGreen();
      simonSpace.darkRed();
      simonSpace.darkBlue();
      simonSpace.darkYellow();
    },
    
    clearPlayer: function() {
      simonSpace.playerGame = [];
      simonSpace.sequence = [];
      simonSpace.sequenceCounter = 0;
    },
    
    lightGreen: function () {
      $("#seg-green").css("fill", "#00ff00");
      simonSpace.playSoundGreen();
      simonSpace.delay( function () {
        simonSpace.darkGreen();
      }, 500);
      simonSpace.delay( function () {
        simonSpace.pauseBetweenBleeps();
      }, 500);
    },
    
    darkGreen: function () {
      $("#seg-green").css("fill", "#006400");
    },
      
    lightRed: function () {
      $("#seg-red").css("fill", "#ff0000");
      simonSpace.playSoundRed();
      simonSpace.delay( function () {
        simonSpace.darkRed();
      }, 500);
      simonSpace.delay( function () {
        simonSpace.pauseBetweenBleeps();
      }, 500);
    },
    
    darkRed: function () {
      $("#seg-red").css("fill", "#8b0000");
    },
    
    lightBlue: function () {
      $("#seg-blue").css("fill", "#0000ff");
      simonSpace.playSoundBlue();
      simonSpace.delay( function () {
        simonSpace.darkBlue();
      }, 500);
      simonSpace.delay( function () {
        simonSpace.pauseBetweenBleeps();
      }, 500);
    },
    
    darkBlue: function () {
      $("#seg-blue").css("fill", "#0000A0");
    },
    
    lightYellow: function () {
      $("#seg-yellow").css("fill", "#ffff00");
      simonSpace.playSoundYellow();
      simonSpace.delay( function () {
        simonSpace.darkYellow();
      }, 500);
      simonSpace.delay( function () {
        simonSpace.pauseBetweenBleeps();
      }, 500);
    },
    
    darkYellow: function () {
      $("#seg-yellow").css("fill", "#999900");
    },
    
    blinkText: async function () {
      await setInterval( function() {
        $("#text-moves").hide();
      }, 200);
      await setInterval( function() {
        $("#text-moves").show();
      }, 200);
      await setInterval( function() {
        $("#text-moves").hide();
      }, 200);
      await setInterval( function() {
        $("#text-moves").show();
      }, 200);
    }, 
  }
  
  $("#seg-green")
    .on("click", function () {
    if (simonSpace.turnedOn && simonSpace.started) {
      $("#seg-green").css("fill", "#00ff00");
      simonSpace.playSoundGreen();
      setTimeout(function() {
        $("#seg-green").css("fill", "#006400"); 
      }, 500);
      simonSpace.playerGame.push(0);
      simonSpace.sequenceCounter++;
      if (simonSpace.sequenceCounter === simonSpace.gameCounter+1) {
        simonSpace.delay( function () {
          simonSpace.checkGame();
        }, 1000);
      }
    }
  });
  
  $("#seg-red")
    .on("click", function() {
    if (simonSpace.turnedOn && simonSpace.started) {
      $("#seg-red").css("fill", "#ff0000");
      simonSpace.playSoundRed();
      setTimeout(function() {
        $("#seg-red").css("fill", "#8b0000"); 
      }, 500);
      simonSpace.playerGame.push(1);
      simonSpace.sequenceCounter++;
      if (simonSpace.sequenceCounter === simonSpace.gameCounter+1) {
        simonSpace.delay( function () {
          simonSpace.checkGame();
        }, 1000);
      }
    }
  })
  
  $("#seg-blue")
    .on("click", function () {
    if (simonSpace.turnedOn && simonSpace.started) {
      $("#seg-blue").css("fill", "#0000ff");
      simonSpace.playSoundBlue();
      setTimeout(function() {
        $("#seg-blue").css("fill", "#0000A0"); 
      }, 500);
      simonSpace.playerGame.push(2);
      simonSpace.sequenceCounter++;
      if (simonSpace.sequenceCounter === simonSpace.gameCounter+1) {
        simonSpace.delay( function () {
          simonSpace.checkGame();
        }, 1000);
      }
    }
  });
  
  $("#seg-yellow")
    .on("click", function () {
    if (simonSpace.turnedOn && simonSpace.started) {
      $("#seg-yellow").css("fill", "#ffff00");
      simonSpace.playSoundYellow();
      setTimeout(function() {
        $("#seg-yellow").css("fill", "#999900"); 
      }, 500);
      simonSpace.playerGame.push(3);
      simonSpace.sequenceCounter++;
      if (simonSpace.sequenceCounter === simonSpace.gameCounter+1) {
        simonSpace.delay( function () {
          simonSpace.checkGame();
        }, 1000);
      }
    }
  });
  
  $("#btn-strict")
    .on("mousedown", function() {
    $("#btn-strict-shadow").removeAttr("filter");
    if (simonSpace.turnedOn) {    
      if (!simonSpace.strictOn) {
        $("#light-strict").css("fill", "red");
      }
      else {
        $("#light-strict").css("fill", "black");     
      }
      simonSpace.strictOn = !simonSpace.strictOn;
    }
  })
    .on("mouseup", function() {
    $("#btn-strict-shadow").attr("filter", "url(#btn_blur)");
  })
  
  $("#btn-start")
    .on("mousedown", function() {
    $("#btn-start-shadow").removeAttr("filter");
    if (simonSpace.turnedOn) {
      simonSpace.clearTimeouts();
      simonSpace.clearColors();
      simonSpace.started = true;
      simonSpace.execution = true;    
      simonSpace.clearPlayer();
      // for restarting the game
      if (simonSpace.gameCounter >= 1) {
        $("#text-moves").text("--");
        simonSpace.delay( function () {
            $("#text-moves").text("01");
          }, 1000);
      }
      else {
        $("#text-moves").text("01");
      }   
      simonSpace.gameCounter = 0;
      simonSpace.randomGame = simonSpace.buildRandomGame(simonSpace.gameLength);   
      simonSpace.playSequence(0);
    }
  
  })
    .on("mouseup", function() {
    $("#btn-start-shadow").attr("filter", "url(#btn_blur)");
  })
  
  $("#btn-turnon-blue")
    .on("click", function() {
    // turn off the game
    if (simonSpace.turnedOn) {
      $(this).attr("x", "277");
      $("#light-strict").css("fill", "black");
      simonSpace.execution = false;
      simonSpace.turnedOn = false;
      simonSpace.started = false;
      simonSpace.randomGame = [];
      simonSpace.clearTimeouts();
      simonSpace.clearColors();
      simonSpace.clearPlayer();
      simonSpace.gameCounter = 0;   
      $("#text-moves").text("");
    }
    // turn on the game
    else {
      $(this).attr("x", "303");
      $("#text-moves").text("--");
      simonSpace.execution = true;
      simonSpace.turnedOn = true;
      simonSpace.started = false;    
    }
  })