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
    //could add a prompt here to modify the player names
    const players = {
      player1: 'p1',
      player2: 'p2',
    }
    return players
  })();

  function gamePlay(){
    if(playerControl.player1 != '' && playerControl.player2 != '') {
      // let answer = prompt('play game?', '');
      // if(answer==='yes') {
        // gameBoardStack.gameBoardCreate();
        function insertValue(target, entry) {
          //get target index, and number to go in there

          game.gameBoardStack.gameBoard.gameArray[target] = entry;
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
      (i => game.gameBoardStack.gameBoard.gameArray[i]);
      console.log(evaluation);
    }
    // console.log(game.gameBoardStack.gameBoard.gameArray);
    
    // console.log(Object.keys(answerKey).length);
    
    return answerKey;
  }

  return {gameBoardStack, playerControl, gamePlay, gameEvaluator};

  
  

  
})();