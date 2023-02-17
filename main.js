(function game() {
  const gameBoard = {
    gameArray: ['x','x','x','x','x','x','x','x','x']
  }

  const gameBoardCreate = (() => {
    const gameBoardContainer = document.querySelector('.board-container');
    for(let i = 1; i < 10; i++){
      const gameSquare = document.createElement('div');
      gameSquare.classList.add('game-square');
      gameSquare.dataset.value = [i];
      gameBoardContainer.appendChild(gameSquare);
    }
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