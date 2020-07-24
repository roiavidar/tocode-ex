import { IGameCell } from './TicTacToe.model';
import { FLICKER, FADE, FIRST_PLAYER, SECOND_PLAYER } from './constants';

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

export function getCellStyle(cell: IGameCell) {
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

export function getMarkSymbol(cell: IGameCell) {
    if (cell.player === FIRST_PLAYER) {
        return 'X';
    } else if (cell.player === SECOND_PLAYER) {
        return 'O';
    } else {
         return '';
    }
}