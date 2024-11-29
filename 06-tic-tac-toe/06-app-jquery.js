//  ********************************************************  
//  **********  /06-tic-tac-toe/06-app-jquery.js  **********  
//  ********************************************************  


//  **********  6. Tic Tac Toe con jQuery  **********

$(document).ready(function () {
    
    
    console.warn('**********  06-tic-tac-toe  **********  -- jquery version: ' + $.fn.jquery + ' -----');
    console.log('\n\n');

    //  ----------  Referencias al HTML  ----------
    const $gameBoard = $('.game__board');
    const $messageTurn = $('.game__turn');
    const $endGame = $('.endgame');
    const $endGameResult = $('.endgame__result');
    const $buttonReset = $('.endgame__button');

    //  ----------  Variables  ----------
    let maxTurn = 9;
    let isTurnX = true;
    let turn = 0;

    const players = {
        x: 'cross',
        o: 'circle'
    };

    const winningPosition = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],    //  Posiciones horizontales
        [0, 3, 6], [1, 4, 7], [2, 5, 8],    //  Posiciones verticales
        [0, 4, 8], [2, 4, 6]                //  Posiciones diagonales
    ];


    //  ---------------------------------
    //  ----------  Funciones  ----------
    //  ---------------------------------


    const startGame = () => {
        $messageTurn.text(isTurnX ? 'X' : 'O');
        createBoard();
        isTurnX = true;
        turn = 0;
        $endGame.removeClass('show');
    };


    const createBoard = () => {
        const cells = 9;

        $gameBoard.empty(); // Limpia el tablero

        for (let i = 0; i < cells; i++) {
            const $cell = $('<div>').addClass('cell');

            // Asocia el evento con .one para ejecutarlo solo una vez
            $cell.one('click', handleGame);

            $gameBoard.append($cell);
        }
    };


    const handleGame = function () {
        const $currentCell = $(this);
        const currentTurn = isTurnX ? players.x : players.o;

        turn++;
        drawShape($currentCell, currentTurn);

        if (checkWinner(currentTurn)) return;
        if (turn === maxTurn) showEndGame(false);

        changeTurn();
    };


    const drawShape = ($element, newClass) => {
        $element.addClass(newClass);
    };


    const changeTurn = () => {
        isTurnX = !isTurnX;
        $messageTurn.text(isTurnX ? 'X' : 'O');
    };


    const checkWinner = (currentPlayer) => {
        const $cells = $('.cell');

        const winner = winningPosition.some(array => {
            return array.every(position => $cells.eq(position).hasClass(currentPlayer));
        });

        if (!winner) return false;

        showEndGame(true);
        return true;
    };


    const showEndGame = (winner) => {
        $endGame.addClass('show');

        if (winner) {
            $endGameResult.text(`¡ ${isTurnX ? 'X' : 'O'} ha ganado el juego!!`);
        } else {
            $endGameResult.text('Empate');
        }
    };


    //  ------------------------------------
    //  ----------  Eventos  ---------------
    //  ------------------------------------
    $buttonReset.on('click', startGame);


    //  ---------------------------------------
    //  ----------  Inicia el juego  ----------
    //  ---------------------------------------
    startGame();

    console.log('\n\n\n\n\n');
});
