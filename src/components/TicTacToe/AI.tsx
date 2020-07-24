import {EMPTY_CELL} from "./constants";
import { IGameCell, IAI } from "./TicTacToe.model";

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