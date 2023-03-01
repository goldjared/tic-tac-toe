const game = (() => {
  const boardStack = (() => {
    const gameBoard = {
      gameArray: [null, null, null, 'o', 'o', null, null, null, null]
      //gameArray: ['x', 'k', 'a', 'a', 'f', 'j', 'k', null, null]
    }

    function gameBoardCreate() {
      const gameBoardContainer = document.querySelector('.board-container');
      for(let i = 0; i < 9; i++){
        // const gameSquare= [i];
        // console.log(gameSquare)
        const gameSquare = document.createElement('div');
        gameSquare.classList.add('game-square');
        gameSquare.dataset.value = [i];
        gameBoardContainer.appendChild(gameSquare);
      }
      
    };

    return {gameBoard, gameBoardCreate};
  })();

  const playerControl = (() => {
    // const player1 = makePlayer(prompt('Player, enter name, and weapon (name, x/o)')
    // .split(','));
    // const player2 = makePlayer(prompt('Player, enter name, and weapon (name, x/o)')
    // .split(','));
    const player1 = {
      name: 'john',
      selection: 'x'
    };
    const player2 = {
      name: 'doe',
      selection: 'o'
    };

    // function makePlayer(entry){
    //   return {
    //     name: entry[0],
    //     selection: entry[1]
    //   }
    // }
    
    return {player1, player2}
  })();

  function displayControl() {
    function playerDisplay(){
      const playerContainer = document.querySelector('.player-info');
      for(let i = 1; i < 3; i++) {
        const playerName = document.createElement('div');
        playerName.classList.add('.player-name');
        playerContainer.appendChild(playerName);
        // playerName.textContent = `Player ${[i]}: ${playerContainer.player[i]}`
        playerName.textContent = `Player ${[i]}: ${playerControl['player' + [i]].name}`;

      }
    }
    function boardDisplay(square){
      const gameSquareMod = square;
      gameSquareMod.textContent = `${playerTurn.getTurn().selection}`;
    }
    return {playerDisplay, boardDisplay};
  }

  const turnCreation = () => {
    n = 0
    return {
      getTurn() {
        if (n % 2 === 0) {
          return playerControl.player2;
        } else {
          return playerControl.player1;
        }
        // return n;
      },
      incrementTurn() {
        n += 1;
      }
    };
  }

  const playerTurn = turnCreation();

  const boardInput = document.querySelector('.board-container');
  boardInput.addEventListener('click', (e) => {
    if(e.target.dataset.value === undefined) {
      return;
    };
    if(game.boardStack.gameBoard.gameArray[e.target.dataset.value] != null) {
      alert('error');
      return;
    }
    gamePlay().insertValue(e.target.dataset.value);
    displayControl().boardDisplay(e.target);
    console.log('3', playerTurn.getTurn().selection)
  });
  const resetButton = document.querySelector('.reset-btn');
    resetButton.addEventListener('click', () => {
      gameEnd();
  });

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
      }
      return {insertValue};
     };
  };

  const gameEvaluator = () => {
    const answerKey = {
      1: [0,1,2],
      2: [3,4,5],
      3: [6,7,8],
      4: [0,3,6],
      5: [1,4,7],
      6: [2,5,8],
      7: [0,4,8],
      8: [6,4,2]
    }

    for(let i = 1; i < 9; i++){
      let evaluation = answerKey[i].map
      (i => game.boardStack.gameBoard.gameArray[i]);
      isEvalutionEqual(evaluation);
    }

    function isEvalutionEqual(array){
      const noNullValue = (currentValue) => 
      currentValue != null;
      const isMatchingKey = (currentValue) => 
      currentValue === array[0] && currentValue != null;

      let result = '';

      if(game.boardStack.gameBoard.gameArray.length > 7 &&
        game.boardStack.gameBoard.gameArray
        .every(noNullValue) === true &&
        array.every(isMatchingKey) === false) {
        console.log('draw');
        result = 'draw';
        gameEnd(result);
      }

      if(array.every(isMatchingKey) === true){
        console.log(array, 'winner');
        result = 'win';
        (array[0] === playerControl.player1.selection) 
        ? displayControl().resultDisplay(`${playerControl.player1.name} WON!`) 
        : displayControl().resultDisplay(`${playerControl.player2.name} WON!`);
        
      };
    };

  function gameEnd() {
    game.playerTurn = turnCreation();
    displayControl().resultDisplay();
    (function clearGameBoard() {
      game.boardStack.gameBoard.gameArray = [null, null, null, null, null, null, null, null, null];
      const gameBoardContainer = document.querySelector('.board-container');
      while(gameBoardContainer.firstChild) {
      gameBoardContainer.removeChild(gameBoardContainer.lastChild);
    }
    }())

    boardStack.gameBoardCreate();
    
    // console.log('result', result);
    // isEvalutionEqual.result = '';
    console.log('this is gameEnd log', game.boardStack.gameBoard.gameArray);
    console.log('this is gameEnd log', playerTurn.getTurn());
    }
    return {isEvalutionEqual};
  };

  return {boardStack, playerControl, gamePlay, 
  gameEvaluator};
})();