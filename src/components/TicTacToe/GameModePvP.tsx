import GameMode from './GameMode';
import {GameState} from './TicTacToe.model';

export default class GameModePvP extends GameMode {
    constructor(props?: {
        gameState?: GameState
    }) {
        if (props) {
            super(props.gameState);
        } else {
            super();
        }
    }

    tryToMark(row: number, col: number): GameState[] {
        const turns = [];
        const humanTurn = this.playerTurn(row, col);
        turns.push(humanTurn);
        
        return turns;
    }
}