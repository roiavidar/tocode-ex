import React, { useState } from 'react';
import {ITicTacToeService, GameState, IGameCell} from './TicTacToe.model';
import {getCellStyle, getMarkSymbol} from './BoardStyleUtil';

const rowStyle = {
    display: 'flex'
}

export default function TicTacToeBoard(props: {
    logic: ITicTacToeService,
    gameSpeed: number,
    updateGameState: (gameState: GameState) => void,
    board: IGameCell[][]
}) {
    const {logic, gameSpeed, updateGameState, board} = props;
    const [gameLocked, setGameLocked] = useState(false);

    // Can you explain what this function should do?
    function tryToMark(row: number, col: number) {
        if (gameLocked) return;
        const gameSnapshots = logic.tryToMark(row, col);
        setGameLocked(true);

        gameSnapshots.forEach((game: GameState, index: number) => {
            setTimeout(() => {
                setGameState(game);
                if (index === gameSnapshots.length - 1) {
                    setGameLocked(false);
                }
            }, gameSpeed*index);
        });
    }

    function setGameState(game: GameState) {
        updateGameState(game);
    }

    function renderCell(cell: IGameCell, colIndex: number, rowIndex: number) {
        return (
            <div style={getCellStyle(cell)} onClick={() => { tryToMark(rowIndex, colIndex) }}>
                        {
                            getMarkSymbol(cell)
                        }
            </div>
        )
    }

    function renderRow(row: IGameCell[], rowIndex: number) {
        return (
            <div style={rowStyle}>
            {
                row.map((cell: IGameCell, colIndex: number) => {
                    return (
                        renderCell(cell, colIndex, rowIndex)
                    )
                })
            }
            </div>
        )
    }

    return (
        <div>
            {
                board.map((row: IGameCell[], rowIndex: number) => {
                    return (
                       renderRow(row, rowIndex)
                    )
                })
            }
        </div>
    )
}
