import {ITicTacToeService, IGameCell, Score, IPlayers} from './TicTacToe.model';
import {GameState} from './TicTacToe.model';
import TicTacToe, {EMPTY_CELL} from './constants';
import _ from 'lodash';

const { FIRST_PLAYER, SECOND_PLAYER, FLICKER, FADE, NO_WINNER, TIE, SCORE_TIE_INDEX } = TicTacToe;

export default abstract class GameMode implements ITicTacToeService {
    protected board: IGameCell[][] = this.createNewBoard();
    protected currentPlayer: number = FIRST_PLAYER;
    protected scores: Score[] = [{player: FIRST_PLAYER, score: 0}, {player: TIE, score: 0}, {player: SECOND_PLAYER, score: 0}];
    protected players: IPlayers = {
        [FIRST_PLAYER]: 'Player 1',
        [SECOND_PLAYER]: 'Player 2'
    };
    protected winner: number = NO_WINNER;

    constructor(gameState?: GameState) {
        if (gameState) {
            this.board = gameState.board || this.board;
            this.currentPlayer =gameState.currentPlayer || this.currentPlayer;
            this.scores = gameState.scores || this.scores;
            this.players = gameState.players || this.players;
            this.winner = gameState.winner || this.winner;    
        }
    }

    emptyCell(): IGameCell {
        return {
            player: EMPTY_CELL,
            state: EMPTY_CELL
        }
    }
    
    createNewBoard() {
        return [
            [this.emptyCell(), this.emptyCell(), this.emptyCell()],
            [this.emptyCell(), this.emptyCell(), this.emptyCell()],
            [this.emptyCell(), this.emptyCell(), this.emptyCell()]
        ]
    }
    

    abstract tryToMark(row: number, col: number): GameState[];

    checkRow(row: number, col: number) {
        let winner = true;
        for (let tempCol=0; tempCol < this.board[row].length; tempCol++) {
            if (this.board[row][tempCol].player !== this.currentPlayer) {
                winner = false;
            }
        }

        if (winner) {
            this.setFadeToAllCells();

            for (let tempCol=0; tempCol < this.board[row].length; tempCol++) {
                this.board[row][tempCol].state = FLICKER;
            }   
        }

        return winner;
    }

    checkColumn(row: number, col: number) {
        let winner = true;
        for (let tempRow=0; tempRow < this.board[col].length; tempRow++) {
            if (this.board[tempRow][col].player !== this.currentPlayer) {
                winner = false;
            }
        }

        if (winner) {
            this.setFadeToAllCells();

        for (let tempRow=0; tempRow < this.board[col].length; tempRow++) {
                this.board[tempRow][col].state = FLICKER;
            }   
        }

        return winner;
    }

    checkUpDownAxis(row: number, col: number) {
        let winner = true;
        for (let tempCol=0,tempRow=0; tempRow < this.board[row].length; tempCol++, tempRow++) {
            if (this.board[tempRow][tempCol].player !== this.currentPlayer) {
                winner = false;
            }
        }

        if (winner) {
            this.setFadeToAllCells();

            for (let tempCol=0,tempRow=0; tempRow < this.board[row].length; tempCol++, tempRow++) {
                this.board[tempRow][tempCol].state = FLICKER;
            }   
        }
        return winner;
    }

    checkDownUpAxis(row: number, col: number) {
        let winner = true;
        for (let tempRow=this.board[row].length - 1,tempCol=0; tempCol < this.board[row].length; tempCol++, tempRow--) {
            if (this.board[tempRow][tempCol].player !== this.currentPlayer) {
                winner = false;
            }
        }

        if (winner) {
            this.setFadeToAllCells();

            for (let tempRow=this.board[row].length - 1,tempCol=0; tempCol < this.board[row].length; tempCol++, tempRow--) {
                this.board[tempRow][tempCol].state = FLICKER;
            }   
        }
        return winner;
    }

    setFadeToAllCells() {
        this.board.forEach((row: IGameCell[]) => {
            row.forEach((cell: IGameCell) => {
                cell.state = FADE;
            });
        })
    };

    checkForWinner(row: number, col: number) {
        return this.checkRow(row, col) || this.checkColumn(row, col) || this.checkUpDownAxis(row, col) || this.checkDownUpAxis(row, col);
    }

    getNextPlayer() {
        return this.currentPlayer === FIRST_PLAYER ? SECOND_PLAYER : FIRST_PLAYER
    }

    markCell(row: number, col: number) {
        if (this.board[row][col].player === EMPTY_CELL) {
            this.board[row][col].player = this.currentPlayer;
            return true;
        }
        return false;
    }

    setWinner() {
        this.winner = this.currentPlayer;
        this.scores[this.currentPlayer].score++;
    }

    newGame() {
        this.board = this.createNewBoard();
        this.currentPlayer = FIRST_PLAYER;
        this.winner = NO_WINNER;
    }

    reset() {
        this.board = this.createNewBoard();
        this.currentPlayer = FIRST_PLAYER;
        this.winner = NO_WINNER;
        this.scores = [{player: FIRST_PLAYER, score: 0}, {player: TIE, score: 0}, {player: SECOND_PLAYER, score: 0}];
        return this.GameState;
    }

    playerTurn(row: number, col: number) {
        if (this.winner !== NO_WINNER) {
            this.newGame();
        } else {
            const isMarked = this.markCell(row, col);

            if (isMarked){
                if (this.checkForWinner(row, col)) {
                    this.setWinner();
                } else if (this.checkForTie()) {
                    this.setTie();
                } else {
                    this.currentPlayer = this.getNextPlayer();
                }    
            }
        }
        
        return this.GameState;
    }

    checkForTie() {
        let tie = true;
        this.board.flat().forEach((cell: IGameCell) => {
            if (cell.player === EMPTY_CELL) {
                tie = false;
            }
        });

        return tie;
    }

    setTie() {
        this.winner = TIE;
        this.scores[SCORE_TIE_INDEX].score++;
    }

    get GameState(): GameState {
        return  _.cloneDeep({
            board: this.board,
            currentPlayer: this.currentPlayer,
            scores: this.scores,
            players: this.players,
            winner: this.winner
        });
    }
}