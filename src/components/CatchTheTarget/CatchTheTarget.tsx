import React, { useState, useEffect } from 'react';
import { ScoreBoard } from './ScoreBoard';
import { GameBoard } from './GameBoard';

export function CatchTheTarget() {
    const newGame = 'New Game';
    const bonusPoints = 10;
    const penaltyPoints = -5;
    const boxes = 10;
    const [score, setScore] = useState(0);
    const [target, setTarget] = useState(-1);

    useEffect(() => {
        setTarget(calcTarget());
    }, [])

    function reset() {
        switchTarget();
        setScore(0);
    }

    function calcTarget() {
        return Math.floor(Math.random() * boxes);
    }

    function hitHandler() {
        switchTarget();
        // When setting a state relative to the old value
        // we use a function:
        // setScore(v => v + bonusPoints)
        setScore(score + bonusPoints);
    }

    function switchTarget() {
        const target = calcTarget();
        setTarget(target);
    }

    function missHandler() {
        // When setting a state relative to the old value
        // we use a function:
        // setScore(v => v + penaltyPoints)
        setScore(score + penaltyPoints);
    }

    // A tiny markup comment:
    // look how nice it looks to have: ScoreBoard and GameBoard,
    // it feels so abstract
    // but then you finish with the button which kinda breaks this flow
    // would have been nicer to have a full component there for example:
    // <GameControlPanel controls="new-game,pause-resume" />
    // or maybe:
    // <GameControlPanel>
    //    <NewGameButton />
    //    <PauseResumeButton />
    // </GameControlPanel>
    // or something like that
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
