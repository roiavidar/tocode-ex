import React from 'react';

export function ScoreBoard(props: { score: number }) {
    const {score} = props;
    return (
        <div>{score} Points !</div>
    )
}