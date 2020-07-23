import GameMode from './GameMode';
import {GameState} from './TicTacToe.model';
import { AI } from './AI';
import { NO_ROW, NO_WINNER } from './constants';

export default class GameModePvE extends GameMode {
    public computerTurn: number = 1;
    private computerAI: AI;

    constructor(props: {
        computerAI: AI,
        computerTurn: number,
        gameState?: GameState
    }) {
        super(props.gameState);
        this.computerTurn = props.computerTurn;
        this.computerAI = props.computerAI;
    }

    tryToMark(row: number, col: number): GameState[] {
        if (this.winner !== NO_WINNER) {
            this.newGame();
            return [this.GameState];
        }

        const turns = [];
        if (this.computerTurn !== this.currentPlayer) {
            // Human turn
            const humanTurn = this.playerTurn(row, col);

            turns.push(humanTurn);
        }
        
        if (this.winner === NO_WINNER) {
            // Computer turn
            const mark = this.computerAI.getMark(this.board, this.computerTurn);
            const computerTurn = this.playerTurn(mark.row, mark.col);
            turns.push(computerTurn);
        }
        
        return turns;
    }

}