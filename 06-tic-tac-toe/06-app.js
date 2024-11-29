//  *************************************************  
//  **********  /06-tic-tac-toe/06-app.js  **********  
//  *************************************************  


//  **********  6. Tic Tac Toe  **********

document.addEventListener('DOMContentLoaded', () => {


    console.warn('**********  06-tic-tac-toe  **********');
    console.log('\n\n');

    //  ----------  referencias al HTML  ----------
    const gameBoard = document.querySelector('.game__board');
    const messageTurn = document.querySelector('.game__turn');
    const endGame = document.querySelector('.endgame');
    const endGameResult = document.querySelector('.endgame__result');
    const buttonReset = document.querySelector('.endgame__button');


    //  ----------  Variables  ----------
    let maxTurn = 9;
    let isTurnX = true;
    let turn = 0;

    const players = {
        x: 'cross',
        o: 'circle'
    };

    const winningPosition = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],    //  posiciones horizontales
        [0, 3, 6], [1, 4, 7], [2, 5, 8],    //  posiciones verticales
        [0, 4, 8], [2, 4, 6]                //  posiciones diagonales
    ];



    //  ---------------------------------
    //  ----------  FUNCIONES  ----------
    //  ---------------------------------


    //  ----------------------
    const startGame = () => {

        messageTurn.textContent = isTurnX ? 'X' : 'O';
        createBoard();
        isTurnX = true;
        turn = 0;
        endGame.classList.remove('show');

    }

    //  -------------------------
    const createBoard = () => {

        const cells = 9;

        while (gameBoard.firstElementChild) gameBoard.firstElementChild.remove();

        for (let i = 0; i < cells; i++) {

            const div = document.createElement('div');
            div.classList.add('cell');

            div.addEventListener('click', handleGame, { once: true });

            gameBoard.append(div);
        }
    }


    //  -----------------------
    const handleGame = (e) => {

        const currentCell = e.currentTarget;
        const currentTurn = isTurnX ? players.x : players.o
        //currentCell.style.backgroundColor = 'red'

        turn++;
        drawShape(currentCell, currentTurn);

        //  -----  tendra, cross o circle  -----
        checkWinner(currentTurn);

        if (checkWinner(currentTurn)) return;
        if (turn === maxTurn) showEndGame(false);


        changeTurn();
    }


    //  ---------------------------------------
    const drawShape = (element, newClass) => {

        element.classList.add(newClass);
    }


    //  -----------------------
    const changeTurn = () => {

        isTurnX = !isTurnX;
        messageTurn.textContent = isTurnX ? 'X' : 'O';

    }

    //  -------------------------------------
    const checkWinner = (currentPlayer) => {

        const cells = document.querySelectorAll('.cell');
        //console.log(cells);

        /*
            const winningPosition = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8],    //  posiciones horizontales
                [0, 3, 6], [1, 4, 7], [2, 5, 8],    //  posiciones verticales
                [0, 4, 8], [2, 4, 6]                //  posiciones diagonales
            ];
        */

        //  -----  some, para iterar el arreglo  -----
        const winner = winningPosition.some(array => {

            //console.log(array);

            return array.every(position => cells[position].classList.contains(currentPlayer));
            
            // return array.every(position => {
            //     return cells[position].classList.contains(currentPlayer);
            // })
        })

        //console.log(winner);
        if (!winner) return
        else showEndGame(winner);
        return true;
    }



    //  ------------------------------
    const showEndGame = (winner) => {

        endGame.classList.add('show');

        if (winner) endGameResult.textContent = `¡ ${isTurnX ? 'X' : 'O'} ha ganado el juego!!`;
        else endGameResult.textContent = 'Empate';
    }


    //  ------------------------------------
    //  ----------  Eventos  ---------------
    //  ------------------------------------

    buttonReset.addEventListener('click', startGame);

    
    //  ---------------------------------------
    //  ----------  INICIA EL JUEGO  ----------
    //  ---------------------------------------
    startGame();


    console.log('\n\n\n\n\n')

});
