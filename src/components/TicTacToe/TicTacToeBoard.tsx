import React, { CSSProperties } from 'react';
import { IGameCell } from './TicTacToe.model';

const rowStyle = {
    display: 'flex'
}

export default function TicTacToeBoard(props: {
    board: IGameCell[][],
    tryToMark: (row: number,col: number) => void,
    getCellStyle: (cell: IGameCell) => CSSProperties,
    getMarkSymbol: (cell: IGameCell) => string
}) {
    const {board, tryToMark, getCellStyle, getMarkSymbol} = props;

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
