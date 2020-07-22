import React, { useState } from 'react';
import { ScoreBoard } from './ScoreBoard';
import { GameBoard } from './GameBoard';
import ICatchTheTargetLogic from './ICatchTheTarget';

export function CatchTheTarget(props: {
    logic: ICatchTheTargetLogic
}) {
    const {logic} = props;
    const newGame = 'New Game';
    const [score, setScore] = useState(logic.score);
    const [target, setTarget] = useState(logic.target);

    function tryToHitHandler(box: number) {
        logic.tryToHit(box);
        updateState();
    }

    function reset() {
        logic.reset();
        updateState();
    }

    function updateState() {
        setScore(logic.score);
        setTarget(logic.target);
    }

    return (
        <div>
            <ScoreBoard score={score} />
            <GameBoard 
                    tryToHit={tryToHitHandler}
                    boxes={logic.boxes}
                    target={target} />
            <button onClick={reset}>{newGame}</button>
        </div>
    )
}