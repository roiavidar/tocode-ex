import React, { useState, useEffect } from 'react';
import { ScoreBoard } from './ScoreBoard';
import { GameBoard } from './GameBoard';

export function CatchTheTarget() {
    const newGame = 'New Game';
    const bonusPoints = 10;
    const penaltyPoints = -5;
    const boxes = 10;
    const [score, setScore] = useState(0);
    const [target, setTarget] = useState(calcTarget());

    function reset() {
        switchTarget();
        setScore(0);
    }

    function calcTarget() {
        return Math.floor(Math.random() * boxes);
    }

    function hitHandler() {
        switchTarget();
        setScore(score + bonusPoints);
    }

    function switchTarget() {
        const target = calcTarget();
        setTarget(target);
    }

    function missHandler() {
        setScore(score + penaltyPoints);
    }

    return (
        <>
            <ScoreBoard score={score} />
            <GameBoard 
                    hit={hitHandler}
                    miss={missHandler}
                    boxes={boxes}
                    target={target} />
            <button onClick={reset}>{newGame}</button>
        </>
    )
}