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
      console.log('this is eval 1', evaluation)
      isEvalutionEqual(evaluation);

    }

    function isEvalutionEqual(array){
      const noNullValue = (currentValue) => 
      currentValue != null;
      const isMatchingKey = (currentValue) => 
      currentValue === array[0] && currentValue != null;

      if(game.gameBoardStack.gameBoard.gameArray.length > 7 &&
        game.gameBoardStack.gameBoard.gameArray
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

  return {gameBoardStack, playerControl, gamePlay, 
    gameEvaluator};

  
  

  
})();