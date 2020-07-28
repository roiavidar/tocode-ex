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
