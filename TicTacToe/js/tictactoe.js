let tictacSpace =  {
  
    game: [1, 1, 1, 1, 1, 1, 1, 1, 1],
    result: [0, 0],
    tried: [],
  // so we know who is next
    player1Flag: 1,
    player2Flag: 0,
  // used for notifications to the user
    computerFlag: 0,
    player1Token: 'X',
    player2Token: 'O',
    
    changePlayer: function() {
      if (tictacSpace.player1Flag === 0) {
        tictacSpace.player1Flag = 1;
        tictacSpace.player2Flag = 0;
        $("#player2-label").css("background", "");
        $("#player1-label").css("background", "DarkSlateGrey");
      } else {
        tictacSpace.player1Flag = 0;
        tictacSpace.player2Flag = 1;
        $("#player1-label").css("background", "");
        $("#player2-label").css("background", "DarkSlateGrey");
      }
    },
    
    insertToken: function(cellNumber, token) {
        $("#cell-" + cellNumber).html(token);
        $("#cell-" + cellNumber).addClass("unselectable");
        tictacSpace.game[cellNumber] = token;
        tictacSpace.checkForWin();
      },
    
    clearBoardAndScores: function() {
        $("#cell-0").html("");
        $("#cell-0").removeClass("unselectable");
        $("#cell-1").html("");
        $("#cell-1").removeClass("unselectable");
        $("#cell-2").html("");
        $("#cell-2").removeClass("unselectable");
        $("#cell-3").html("");
        $("#cell-3").removeClass("unselectable");
        $("#cell-4").html("");
        $("#cell-4").removeClass("unselectable");
        $("#cell-5").html("");
        $("#cell-5").removeClass("unselectable");
        $("#cell-6").html("");
        $("#cell-6").removeClass("unselectable");
        $("#cell-7").html("");
        $("#cell-7").removeClass("unselectable");
        $("#cell-8").html("");
        $("#cell-8").removeClass("unselectable");
  
        $("#player1-score").html("0");
        $("#player2-score").html("0");
        tictacSpace.game = [1, 1, 1, 1, 1, 1, 1, 1, 1];
        tictacSpace.result = [0, 0];
        tictacSpace.player1Flag = 1;
        tictacSpace.player2Flag = 0;
      },
    
    clearBoard: function() {
        $("#cell-0").html("");
        $("#cell-0").removeClass("unselectable");
        $("#cell-1").html("");
        $("#cell-1").removeClass("unselectable");
        $("#cell-2").html("");
        $("#cell-2").removeClass("unselectable");
        $("#cell-3").html("");
        $("#cell-3").removeClass("unselectable");
        $("#cell-4").html("");
        $("#cell-4").removeClass("unselectable");
        $("#cell-5").html("");
        $("#cell-5").removeClass("unselectable");
        $("#cell-6").html("");
        $("#cell-6").removeClass("unselectable");
        $("#cell-7").html("");
        $("#cell-7").removeClass("unselectable");
        $("#cell-8").html("");
        $("#cell-8").removeClass("unselectable");
        // set the individual game log back to start
        tictacSpace.game = [1, 1, 1, 1, 1, 1, 1, 1, 1];
      },
    
    updateScore: function() {
        $("#player1-score").html(tictacSpace.result[0]);
        $("#player2-score").html(tictacSpace.result[1]);
    },
    
    updateResultsAndGame: function (token) {
      if (token === tictacSpace.player1Token) {
        tictacSpace.result[0]++;
        tictacSpace.updateScore();
        tictacSpace.clearBoard();
        if (tictacSpace.computerFlage === 1) {
          $("#modalText").html("Player won!");
        }
        else  {
          $("#modalText").html("Player 1 won!");
        }
        $("#winModal").modal("show");
      }
      else {
        tictacSpace.result[1]++;
        tictacSpace.updateScore();
        if (tictacSpace.computerFlag === 1) {
          $("#modalText").html("Computer won!");
        }
        else {
          $("#modalText").html("Player 2 won!");
        }
        $("#winModal").modal("show");
        tictacSpace.clearBoard();
      }     
    },
    
  // called when we put a token on the grid, to check for win
  // when a player wins, a Bootstrap modal opens!!!
    checkForWin: function() {
      if (tictacSpace.game[0] === "X" && tictacSpace.game[1] === "X" && tictacSpace.game[2] === "X") {
        tictacSpace.updateResultsAndGame('X');
        
      } else if (tictacSpace.game[0] === "O" && tictacSpace.game[1] === "O" && tictacSpace.game[2] === "O") {
        tictacSpace.updateResultsAndGame('O');
        
      } else if (tictacSpace.game[3] === "X" && tictacSpace.game[4] === "X" && tictacSpace.game[5] === "X") {
        tictacSpace.updateResultsAndGame('X');
        
      } else if (tictacSpace.game[3] === "O" && tictacSpace.game[4] === "O" && tictacSpace.game[5] === "O") {
        tictacSpace.updateResultsAndGame('O');
        
      } else if (tictacSpace.game[6] === "X" && tictacSpace.game[7] === "X" && tictacSpace.game[8] === "X") {
        tictacSpace.updateResultsAndGame('X');
        
      } else if (tictacSpace.game[6] === "O" && tictacSpace.game[7] === "O" && tictacSpace.game[8] === "O") {
        tictacSpace.updateResultsAndGame('O');
        
      } else if (tictacSpace.game[0] === "X" && tictacSpace.game[3] === "X" && tictacSpace.game[6] === "X") {
        tictacSpace.updateResultsAndGame('X');
        
      } else if (tictacSpace.game[0] === "O" && tictacSpace.game[3] === "O" && tictacSpace.game[6] === "O") {
        tictacSpace.updateResultsAndGame('O');
        
      } else if (tictacSpace.game[1] === "X" && tictacSpace.game[4] === "X" && tictacSpace.game[7] === "X") {
        tictacSpace.updateResultsAndGame('X');
        
      } else if (tictacSpace.game[1] === "O" && tictacSpace.game[4] === "O" && tictacSpace.game[7] === "O") {
        tictacSpace.updateResultsAndGame('O');
        
      } else if (tictacSpace.game[2] === "X" && tictacSpace.game[5] === "X" && tictacSpace.game[8] === "X") {
        tictacSpace.updateResultsAndGame('X');
        
      } else if (tictacSpace.game[2] === "O" && tictacSpace.game[5] === "O" && tictacSpace.game[8] === "O") {
        tictacSpace.updateResultsAndGame('O');
        
      } else if (tictacSpace.game[0] === "X" && tictacSpace.game[4] === "X" && tictacSpace.game[8] === "X") {
        tictacSpace.updateResultsAndGame('X');
        
      } else if (tictacSpace.game[0] === "O" && tictacSpace.game[4] === "O" && tictacSpace.game[8] === "O") {
        tictacSpace.updateResultsAndGame('O');
        
      } else if (tictacSpace.game[2] === "X" && tictacSpace.game[4] === "X" && tictacSpace.game[6] === "X") {
        tictacSpace.updateResultsAndGame('X');
        
      } else if (tictacSpace.game[2] === "O" && tictacSpace.game[4] === "O" && tictacSpace.game[6] === "O") {
        tictacSpace.updateResultsAndGame('O');
        
      } else if (!tictacSpace.game.includes(1)) {
        $("#modalText").html("Draw!");
        $("#winModal").modal("show");
        tictacSpace.clearBoard();
      }
   },
    
    placeComputerToken: function() {
      let tokenIndex = tictacSpace.computerTokenIndex();   
      tictacSpace.delay( function () {
        $("#main").removeClass("unselectable");
        return tictacSpace.insertToken(tokenIndex, tictacSpace.player2Token);
      }, 1000);
      tictacSpace.tried = [];
    },
      
  // returns an index for the computer
    computerTokenIndex: function() {
      // let placeToInsert = Math.floor(Math.random() * 9);
      const placeToInsert = tictacSpace.computerLogic();
      
      tictacSpace.tried.push(placeToInsert);
  
      if (tictacSpace.game[placeToInsert] === 1) {
        return placeToInsert;
      }
      else {
        return tictacSpace.computerTokenIndex();  
      } 
    },
    
    delay: ( function() {
      let timer = 0;
      return function(callback, ms) {
          clearTimeout (timer);
          timer = setTimeout(callback, ms);
      };
    })(),
    
    // simple winning logic for computer
    computerLogic: function() {
      /* combination 1:
      xxx
      ---
      ---
      */
      if (tictacSpace.game[0] === tictacSpace.player2Token && tictacSpace.game[0] === tictacSpace.game[1]) {
        if (!tictacSpace.tried.includes(2)) {
          return 2;
        }   
      } 
      else if (tictacSpace.game[1] === tictacSpace.player2Token && tictacSpace.game[1] === tictacSpace.game[2]) {
        if (!tictacSpace.tried.includes(0)) {
          return 0;
        } 
      }
      else if (tictacSpace.game[2] === tictacSpace.player2Token && tictacSpace.game[0] === tictacSpace.game[2]) {
        if (!tictacSpace.tried.includes(1)) {
          return 1;
        } 
      }
      
      /* combination 2:
      ---
      xxx
      ---
      */
      if (tictacSpace.game[3] === tictacSpace.player2Token && tictacSpace.game[3] === tictacSpace.game[4]) {
        if (!tictacSpace.tried.includes(5)) {
          return 5;
        } 
      } 
      else if (tictacSpace.game[4] === tictacSpace.player2Token && tictacSpace.game[4] === tictacSpace.game[5]) {
        if (!tictacSpace.tried.includes(3)) {
          return 3;
        } 
      }
      else if (tictacSpace.game[5] === tictacSpace.player2Token && tictacSpace.game[3] === tictacSpace.game[5]) {
        if (!tictacSpace.tried.includes(4)) {
          return 4;
        } 
      }
      
      /* combination 3:
      ---
      ---
      xxx
      */
      if (tictacSpace.game[6] === tictacSpace.player2Token && tictacSpace.game[6] === tictacSpace.game[7]) {
        if (!tictacSpace.tried.includes(8)) {
          return 8;
        } 
      } 
      else if (tictacSpace.game[7] === tictacSpace.player2Token && tictacSpace.game[7] === tictacSpace.game[8]) {
        if (!tictacSpace.tried.includes(6)) {
          return 6;
        } 
      }
      else if (tictacSpace.game[8] === tictacSpace.player2Token && tictacSpace.game[6] === tictacSpace.game[8]) {
        if (!tictacSpace.tried.includes(7)) {
          return 7;
        } 
      }
      
      /* combination 4:
      x--
      x--
      x--
      */
      if (tictacSpace.game[0] === tictacSpace.player2Token && tictacSpace.game[0] === tictacSpace.game[3]) {
        if (!tictacSpace.tried.includes(6)) {
          return 6;
        } 
      } 
      else if (tictacSpace.game[3] === tictacSpace.player2Token && tictacSpace.game[3] === tictacSpace.game[6]) {
        if (!tictacSpace.tried.includes(0)) {
          return 0;
        } 
      }
      else if (tictacSpace.game[6] === tictacSpace.player2Token && tictacSpace.game[6] === tictacSpace.game[0]) {
        if (!tictacSpace.tried.includes(3)) {
          return 3;
        } 
      }
      
      /* combination 5:
      -x-
      -x-
      -x-
      */
      if (tictacSpace.game[1] === tictacSpace.player2Token && tictacSpace.game[1] === tictacSpace.game[4]) {
        if (!tictacSpace.tried.includes(7)) {
          return 7;
        } 
      } 
      else if (tictacSpace.game[4] === tictacSpace.player2Token && tictacSpace.game[4] === tictacSpace.game[7]) {
        if (!tictacSpace.tried.includes(1)) {
          return 1;
        } 
      }
      else if (tictacSpace.game[7] === tictacSpace.player2Token && tictacSpace.game[7] === tictacSpace.game[1]) {
        if (!tictacSpace.tried.includes(4)) {
          return 4;
        } 
      }
      
      /* combination 6:
      --x
      --x
      --x
      */
      if (tictacSpace.game[2] === tictacSpace.player2Token && tictacSpace.game[2] === tictacSpace.game[5]) {
        if (!tictacSpace.tried.includes(8)) {
          return 8;
        } 
      } 
      else if (tictacSpace.game[5] === tictacSpace.player2Token && tictacSpace.game[5] === tictacSpace.game[8]) {
        if (!tictacSpace.tried.includes(2)) {
          return 2;
        } 
      }
      else if (tictacSpace.game[8] === tictacSpace.player2Token && tictacSpace.game[8] === tictacSpace.game[2]) {
        if (!tictacSpace.tried.includes(5)) {
          return 5;
        } 
      }
      
      /* combination 7:
      x--
      -x-
      --x
      */
      if (tictacSpace.game[0] === tictacSpace.player2Token && tictacSpace.game[0] === tictacSpace.game[8]) {
        if (!tictacSpace.tried.includes(4)) {
          return 4;
        } 
      } 
      else if (tictacSpace.game[8] === tictacSpace.player2Token && tictacSpace.game[4] === tictacSpace.game[8]) {
        if (!tictacSpace.tried.includes(0)) {
          return 0;
        } 
      }
      else if (tictacSpace.game[4] === tictacSpace.player2Token && tictacSpace.game[0] === tictacSpace.game[4]) {
        if (!tictacSpace.tried.includes(8)) {
          return 8;
        } 
      }
      
      /* combination 8:
      --x
      -x-
      x--
      */
      if (tictacSpace.game[2] === tictacSpace.player2Token && tictacSpace.game[2] === tictacSpace.game[6]) {
        if (!tictacSpace.tried.includes(4)) {
          return 4;
        } 
      } 
      else if (tictacSpace.game[6] === tictacSpace.player2Token && tictacSpace.game[4] === tictacSpace.game[6]) {
        if (!tictacSpace.tried.includes(2)) {
          return 2;
        } 
      }
      else if (tictacSpace.game[4] === tictacSpace.player2Token && tictacSpace.game[2] === tictacSpace.game[4]) {
        if (!tictacSpace.tried.includes(6)) {
          return 6;
        } 
      }
      
      // blocking the player
      /* combination 1:
      xxx
      ---
      ---
      */
      if (tictacSpace.game[0] === tictacSpace.player1Token && tictacSpace.game[0] === tictacSpace.game[1]) {
        if (!tictacSpace.tried.includes(2)) {
          return 2;
        }   
      } 
      else if (tictacSpace.game[1] === tictacSpace.player1Token && tictacSpace.game[1] === tictacSpace.game[2]) {
        if (!tictacSpace.tried.includes(0)) {
          return 0;
        } 
      }
      else if (tictacSpace.game[2] === tictacSpace.player1Token && tictacSpace.game[0] === tictacSpace.game[2]) {
        if (!tictacSpace.tried.includes(1)) {
          return 1;
        } 
      }
      
      /* combination 2:
      ---
      xxx
      ---
      */
      if (tictacSpace.game[3] === tictacSpace.player1Token && tictacSpace.game[3] === tictacSpace.game[4]) {
        if (!tictacSpace.tried.includes(5)) {
          return 5;
        } 
      } 
      else if (tictacSpace.game[4] === tictacSpace.player1Token && tictacSpace.game[4] === tictacSpace.game[5]) {
        if (!tictacSpace.tried.includes(3)) {
          return 3;
        } 
      }
      else if (tictacSpace.game[5] === tictacSpace.player1Token && tictacSpace.game[3] === tictacSpace.game[5]) {
        if (!tictacSpace.tried.includes(4)) {
          return 4;
        } 
      }
      
      /* combination 3:
      ---
      ---
      xxx
      */
      if (tictacSpace.game[6] === tictacSpace.player1Token && tictacSpace.game[6] === tictacSpace.game[7]) {
        if (!tictacSpace.tried.includes(8)) {
          return 8;
        } 
      } 
      else if (tictacSpace.game[7] === tictacSpace.player1Token && tictacSpace.game[7] === tictacSpace.game[8]) {
        if (!tictacSpace.tried.includes(6)) {
          return 6;
        } 
      }
      else if (tictacSpace.game[8] === tictacSpace.player1Token && tictacSpace.game[6] === tictacSpace.game[8]) {
        if (!tictacSpace.tried.includes(7)) {
          return 7;
        } 
      }
      
      /* combination 4:
      x--
      x--
      x--
      */
      if (tictacSpace.game[0] === tictacSpace.player1Token && tictacSpace.game[0] === tictacSpace.game[3]) {
        if (!tictacSpace.tried.includes(6)) {
          return 6;
        } 
      } 
      else if (tictacSpace.game[3] === tictacSpace.player1Token && tictacSpace.game[3] === tictacSpace.game[6]) {
        if (!tictacSpace.tried.includes(0)) {
          return 0;
        } 
      }
      else if (tictacSpace.game[6] === tictacSpace.player1Token && tictacSpace.game[6] === tictacSpace.game[0]) {
        if (!tictacSpace.tried.includes(3)) {
          return 3;
        } 
      }
      
      /* combination 5:
      -x-
      -x-
      -x-
      */
      if (tictacSpace.game[1] === tictacSpace.player1Token && tictacSpace.game[1] === tictacSpace.game[4]) {
        if (!tictacSpace.tried.includes(7)) {
          return 7;
        } 
      } 
      else if (tictacSpace.game[4] === tictacSpace.player1Token && tictacSpace.game[4] === tictacSpace.game[7]) {
        if (!tictacSpace.tried.includes(1)) {
          return 1;
        } 
      }
      else if (tictacSpace.game[7] === tictacSpace.player1Token && tictacSpace.game[7] === tictacSpace.game[1]) {
        if (!tictacSpace.tried.includes(4)) {
          return 4;
        } 
      }
      
      /* combination 6:
      --x
      --x
      --x
      */
      if (tictacSpace.game[2] === tictacSpace.player1Token && tictacSpace.game[2] === tictacSpace.game[5]) {
        if (!tictacSpace.tried.includes(8)) {
          return 8;
        } 
      } 
      else if (tictacSpace.game[5] === tictacSpace.player1Token && tictacSpace.game[5] === tictacSpace.game[8]) {
        if (!tictacSpace.tried.includes(2)) {
          return 2;
        } 
      }
      else if (tictacSpace.game[8] === tictacSpace.player1Token && tictacSpace.game[8] === tictacSpace.game[2]) {
        if (!tictacSpace.tried.includes(5)) {
          return 5;
        } 
      }
      
      /* combination 7:
      x--
      -x-
      --x
      */
      if (tictacSpace.game[0] === tictacSpace.player1Token && tictacSpace.game[0] === tictacSpace.game[8]) {
        if (!tictacSpace.tried.includes(4)) {
          return 4;
        } 
      } 
      else if (tictacSpace.game[8] === tictacSpace.player1Token && tictacSpace.game[4] === tictacSpace.game[8]) {
        if (!tictacSpace.tried.includes(0)) {
          return 0;
        } 
      }
      else if (tictacSpace.game[4] === tictacSpace.player1Token && tictacSpace.game[0] === tictacSpace.game[4]) {
        if (!tictacSpace.tried.includes(8)) {
          return 8;
        } 
      }
      
      /* combination 8:
      --x
      -x-
      x--
      */
      if (tictacSpace.game[2] === tictacSpace.player1Token && tictacSpace.game[2] === tictacSpace.game[6]) {
        if (!tictacSpace.tried.includes(4)) {
          return 4;
        } 
      } 
      else if (tictacSpace.game[6] === tictacSpace.player1Token && tictacSpace.game[4] === tictacSpace.game[6]) {
        if (!tictacSpace.tried.includes(2)) {
          return 2;
        } 
      }
      else if (tictacSpace.game[4] === tictacSpace.player1Token && tictacSpace.game[2] === tictacSpace.game[4]) {
        if (!tictacSpace.tried.includes(6)) {
          return 6;
        } 
      }
      
      // return random index if no rules are met    
      const randomIndex = Math.floor(Math.random() * 9);
        
      return randomIndex;
    }
  };
  
  
  $(document).ready(function() {
    $("#player2-label").css("background", "");
    $("#player1-label").css("background", "DarkSlateGrey");
    $("#tokenModal").modal("show");
  
    $("#tokenRadioX").on("click", function() {
      tictacSpace.player1Token = 'X';
      tictacSpace.player2Token = 'O';
      $("#tokenModal").modal("hide");
    });
    
    $("#tokenRadioO").on("click", function() {
      tictacSpace.player1Token = 'O';
      tictacSpace.player2Token = 'X';
      $("#tokenModal").modal("hide");  
    });
    
    $("#checkbox").on("change", function() {
      if ($("#option-2players").is(":checked")) {
        $("#player1-label").html("Player 1:");
        $("#player2-label").html("Player 2:");
        // $("#tokenModal").modal("show");
        tictacSpace.computerFlag = 0;
        tictacSpace.clearBoardAndScores();
      } else {
        $("#player1-label").html("Player:");
        $("#player2-label").html("Computer:");
        $("#player2-label").css("background", "");
        $("#player1-label").css("background", "DarkSlateGrey");
        // $("#tokenModal").modal("show");
        tictacSpace.computerFlag = 1;
        tictacSpace.clearBoardAndScores();
      }
    });
  
    $("#cell-0").on("click", function() {
      if (tictacSpace.computerFlag === 0) {
        if (tictacSpace.player1Flag === 1) {
          tictacSpace.insertToken(0, tictacSpace.player1Token);
        } else {
          tictacSpace.insertToken(0, tictacSpace.player2Token);
        }
        tictacSpace.changePlayer();
      } 
      else {
        tictacSpace.insertToken(0, tictacSpace.player1Token);
        tictacSpace.changePlayer();
        $("#main").addClass("unselectable");
        tictacSpace.placeComputerToken();  
        tictacSpace.changePlayer();
      }   
    });
  
    $("#cell-1").on("click", function() {
      if (tictacSpace.computerFlag === 0) {
        if (tictacSpace.player1Flag === 1) {
          tictacSpace.insertToken(1, tictacSpace.player1Token);
        } else {
          tictacSpace.insertToken(1, tictacSpace.player2Token);
        }
        tictacSpace.changePlayer();
      } 
      else {
        tictacSpace.insertToken(1, tictacSpace.player1Token);
        tictacSpace.changePlayer();
        $("#main").addClass("unselectable");
        tictacSpace.placeComputerToken();
        tictacSpace.changePlayer();
      }   
    });
  
    $("#cell-2").on("click", function() {
      if (tictacSpace.computerFlag === 0) {
        if (tictacSpace.player1Flag === 1) {
          tictacSpace.insertToken(2, tictacSpace.player1Token);
        } else {
          tictacSpace.insertToken(2, tictacSpace.player2Token);
        }
        tictacSpace.changePlayer();
      } 
      else {
        tictacSpace.insertToken(2, tictacSpace.player1Token);
        tictacSpace.changePlayer();
        $("#main").addClass("unselectable");
        tictacSpace.placeComputerToken();
        tictacSpace.changePlayer();
      }
    });
  
    $("#cell-3").on("click", function() {
      if (tictacSpace.computerFlag === 0) {
        if (tictacSpace.player1Flag === 1) {
          tictacSpace.insertToken(3, tictacSpace.player1Token);
        } else {
          tictacSpace.insertToken(3, tictacSpace.player2Token);
        }
        tictacSpace.changePlayer();
      } 
      else {
        tictacSpace.insertToken(3, tictacSpace.player1Token);
        tictacSpace.changePlayer();
        $("#main").addClass("unselectable");
        tictacSpace.placeComputerToken();
        tictacSpace.changePlayer();
      }
    });
  
    $("#cell-4").on("click", function() {
      if (tictacSpace.computerFlag === 0) {
        if (tictacSpace.player1Flag === 1) {
          tictacSpace.insertToken(4, tictacSpace.player1Token);
        } else {
          tictacSpace.insertToken(4, tictacSpace.player2Token);
        }
        tictacSpace.changePlayer();
      } 
      else {
        tictacSpace.insertToken(4, tictacSpace.player1Token);
        tictacSpace.changePlayer();
        $("#main").addClass("unselectable");
        tictacSpace.placeComputerToken();
        tictacSpace.changePlayer();
      }
    });
  
    $("#cell-5").on("click", function() {
      if (tictacSpace.computerFlag === 0) {
        if (tictacSpace.player1Flag === 1) {
          tictacSpace.insertToken(5, tictacSpace.player1Token);
        } else {
          tictacSpace.insertToken(5, tictacSpace.player2Token);
        }
        tictacSpace.changePlayer();
      } 
      else {
        tictacSpace.insertToken(5, tictacSpace.player1Token);
        tictacSpace.changePlayer();
        $("#main").addClass("unselectable");
        tictacSpace.placeComputerToken();
        tictacSpace.changePlayer();
      }
    });
  
    $("#cell-6").on("click", function() {
      if (tictacSpace.computerFlag === 0) {
        if (tictacSpace.player1Flag === 1) {
          tictacSpace.insertToken(6, tictacSpace.player1Token);
        } else {
          tictacSpace.insertToken(6, tictacSpace.player2Token);
        }
        tictacSpace.changePlayer();
      } 
      else {
        tictacSpace.insertToken(6, tictacSpace.player1Token);
        tictacSpace.changePlayer();
        $("#main").addClass("unselectable");
        tictacSpace.placeComputerToken();
        tictacSpace.changePlayer();
      }
    });
  
    $("#cell-7").on("click", function() {
      if (tictacSpace.computerFlag === 0) {
        if (tictacSpace.player1Flag === 1) {
          tictacSpace.insertToken(7, tictacSpace.player1Token);
        } else {
          tictacSpace.insertToken(7, tictacSpace.player2Token);
        }
        tictacSpace.changePlayer();
      } 
      else {
        tictacSpace.insertToken(7, tictacSpace.player1Token);
        tictacSpace.changePlayer();
        $("#main").addClass("unselectable");
        tictacSpace.placeComputerToken();
        tictacSpace.changePlayer();
      }
    });
  
    $("#cell-8").on("click", function() {  
      if (tictacSpace.computerFlag === 0) {
        if (tictacSpace.player1Flag === 1) {
          tictacSpace.insertToken(8, tictacSpace.player1Token);
        } else {
          tictacSpace.insertToken(8, tictacSpace.player2Token);
        }
        tictacSpace.changePlayer();
      } 
      else {
        tictacSpace.insertToken(8, tictacSpace.player1Token);
        tictacSpace.changePlayer();
        $("#main").addClass("unselectable");
        tictacSpace.placeComputerToken();
        tictacSpace.changePlayer();
      }
    });
    
    $(document).on("click",'#reload', function() {
      tictacSpace.clearBoardAndScores();
    });
    
  });