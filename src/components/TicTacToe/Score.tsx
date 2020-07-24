import React from 'react';
import {Score, IPlayers} from './TicTacToe.model';
import { TIE } from './constants';

const scoreStyle = {
    display: 'inline-block',
    width: '70px',
    height: '50px'
}

const scoreContainerStyle = {
    display: 'flex'
}

export default function ScoreTicTacToe(props: {
    players: IPlayers,
    scores: Score[]
}){
    const  {players, scores} = props;
    return (
        <div style={scoreContainerStyle}>
            {
                scores.map((score: Score, index: number) => {
                    return (
                        <div style={scoreStyle}>
                            <div> {score.player === TIE ? 'TIE' : players[score.player]} </div>
                            <div> {score.score} </div>
                        </div>
                    );
                })
            }
        </div>
    );
}