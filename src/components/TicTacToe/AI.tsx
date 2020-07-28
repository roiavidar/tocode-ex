import {EMPTY_CELL} from "./constants";
import { IGameCell, IAI } from "./TicTacToe.model";

// There's a nice explanation of the min-max algorithm here:
// https://medium.com/@alialaa/tic-tac-toe-with-javascript-es2015-ai-player-with-minimax-algorithm-59f069f46efa
// which would make your AI unbeatable
export class AI implements IAI {
    getMark(board: IGameCell[][], computerSymbol: number) {
        let row = 0;
        while(row < board.length){
            let col = 0;
            while (col < board[row].length) {
                if (board[row][col].player === EMPTY_CELL) {
                    return {
                        row,
                        col
                    }
                }
                col++;
            }
            row++
        }
        return {
            row: -1,
            col: -1
        }
    }
}
