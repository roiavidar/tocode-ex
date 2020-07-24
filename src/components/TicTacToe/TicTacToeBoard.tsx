import React, { useState } from 'react';
import {ITicTacToeService, GameState, IGameCell} from './TicTacToe.model';
import { FIRST_PLAYER, SECOND_PLAYER, FLICKER, FADE } from './constants';

const flickringStyle = {
    backgroundColor: 'red'
}

const fadeStyle = {
    backgroundColor: 'black',
    color: 'white'
}

const cellStyle = {
    width: '100px',
    height: '100px',
    display: 'inline-block',
    backgroundColor: 'grey',
    border: '1px solid white',
    textAlign: 'center' as const,
    lineHeight: '100px'
}

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

    // Great! and now here's the interesting bit - 
    // this function is not "tied" to this component
    // it's possible (and sometimes useful) to move it outside
    // to a helper file
    function getCellStyle(cell: IGameCell) {
        let style;
        if (cell.state === FLICKER) {
            style = flickringStyle;
        }
        if (cell.state === FADE) {
            style = fadeStyle;
        }
        return {
            ...cellStyle,
            ...style
        };
    }

    return (
        <div>
            {
                board.map((row: IGameCell[], rowIndex: number) => {
                    return (
                        <div style={rowStyle}>
                            {
                                row.map((cell: IGameCell, colIndex: number) => {
                                    return (
                                        <div style={getCellStyle(cell)} onClick={() => { tryToMark(rowIndex, colIndex) }}>
                                            {
                                            // Nested ternary ????
                                                cell.player !== FIRST_PLAYER ? (cell.player === SECOND_PLAYER ? 'O' : '') : 'X'
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}
