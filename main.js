(function game() {
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

  
  

  
})();