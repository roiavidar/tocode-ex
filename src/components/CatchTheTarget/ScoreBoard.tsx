import React from 'react';

export function ScoreBoard(props: { score: number }) {
    return (
        <div>{props.score} Points !</div>
    )
}