const game = (() => {
  const gameBoardStack = (() => {
    const gameBoard = {
      gameArray: [null, null, null, null, null, null, null, null, null]
    }

    function gameBoardCreate() {
      const gameBoardContainer = document.querySelector('.board-container');
      for(let i = 1; i < 10; i++){
        const gameSquare = document.createElement('div');
        gameSquare.classList.add('game-square');
        gameSquare.dataset.value = [i];
        gameBoardContainer.appendChild(gameSquare);
      }
    };

    return {gameBoard, gameBoardCreate};
  })();

  const playerControl = (() => {
    const player1 = makePlayer(prompt('Player, enter name, and weapon (name, x/o)')
    .split(','));
    const player2 = makePlayer(prompt('Player, enter name, and weapon (name, x/o)')
    .split(','));

    while(Object.keys(players).length < 2) {
    function makePlayer(entry){
      return {
        name: entry[0],
        selection: entry[1]
      }
      let playerEntry = prompt('Player, enter name, and weapon (name, x/o)')
      .split(',');
      makePlayer(playerEntry);
    }
    
    //     players[entry[0]] = entry[1];
    //   }
    //   // let playerEntry = prompt('Player, enter name, and weapon (name, x/o)')
    //   // .split(',');
    //   // makePlayer(playerEntry);
    // }
    
    return {player1, player2}
  })();

  const turnCreation = () => {
    n = 0
    return {
      getTurn() {
        return n;
      },
      incrementTurn() {
        n += 1;
      }
    };
  }

  const playerTurn = turnCreation();

  function gamePlay(){
    if(playerControl.player1 != '' && playerControl.player2 != '') {
      function insertValue(target) {
        let currentPlayer;
        playerTurn.incrementTurn();
        console.log(playerTurn.getTurn());
        if(playerTurn.getTurn() % 2 === 0) {
          currentPlayer = playerControl.player2;
        } else {
          currentPlayer = playerControl.player1;
        }
        console.log('currentplayer', currentPlayer);

        game.boardStack.gameBoard.gameArray[target] = 
        currentPlayer.selection; //make thiss current player turn
        console.log('insertval log, this is array1', game.boardStack.gameBoard.gameArray)
        gameEvaluator();
        // }
      }
      return {insertValue};
     };
  };

  const gameEvaluator = () => {
    // game.gameBoardStack.gameBoard.gameArray.forEach(entry => )
    
    const answerKey = {
      1: [0,1,2],
      2: [3,4,5],
      3: [6,7,8],
      4: [0,3,6],
      5: [1,4,7],
      6: [2,5,8],
      7: [0,4,8],
      8: [6,4,2]
      // 1: [[0],[1],[2]],
      // 2: [[3],[4],[5]],
      // 3: [[6],[7],[8]],
      // 4: [[0],[3],[6]],
      // 5: [[1],[4],[7]],
      // 6: [[2],[5],[8]],
      // 7: [[0],[4],[8]],
      // 8: [[6],[4],[2]]
    }

    for(let i = 1; i < 9; i++){
      // console.log(answerKey[i]);
      let evaluation = answerKey[i].map
      (i => game.boardStack.gameBoard.gameArray[i]);
      isEvalutionEqual(evaluation);

    }

    function isEvalutionEqual(array){
      const noNullValue = (currentValue) => 
      currentValue != null;
      const isMatchingKey = (currentValue) => 
      currentValue === array[0] && currentValue != null;

      if(game.boardStack.gameBoard.gameArray.length > 7 &&
        game.boardStack.gameBoard.gameArray
        .every(noNullValue) === true &&
        array.every(isMatchingKey) === false) {
        console.log('draw');
      }
      // console.log(array.every(isMatchingKey));
      if(array.every(isMatchingKey) === true){
        console.log(array, 'winner');
        (array[0] === playerControl.player1.selection) 
        ? console.log(`${playerControl.player1.name} WON!`) 
        : console.log(`${playerControl.player2.name} WON!`);
        //check array[0] = p1 or p2.selection. announce player.

      };
    }
    return isEvalutionEqual;
  }

  return {boardStack, playerControl, gamePlay, 
    gameEvaluator};

  
  

  
})();