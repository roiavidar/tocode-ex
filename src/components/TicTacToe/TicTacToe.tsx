import React, { useState, useEffect } from 'react';
import {GameState} from './TicTacToe.model';
import GameModePvP from './GameModePvP';
import GameModePvE from './GameModePvE';
import TicTacToeBoard from './TicTacToeBoard';
import { AI } from './AI';
import { FIRST_PLAYER, SECOND_PLAYER } from './constants';
import ScoreTicTacToe from './Score';
import GameModeSwitcher from './GameModeSwitcher';

const gameModePvE = new GameModePvE({
    computerAI: new AI(),
    computerTurn: SECOND_PLAYER
});
const gameModePvP = new GameModePvP();

export default function TicTacToe(props: {
    gameSpeed: number,
    AI?: { isFirst: boolean }
}) {
    const {gameSpeed, AI} = props;

    useEffect(() => {
        if (AI) {
            gameModePvE.computerTurn = AI.isFirst ? FIRST_PLAYER : SECOND_PLAYER;
        }
    }, [])

    let logic = !!AI ? gameModePvE : gameModePvP;
    const [players, setPlayers] = useState(logic.GameState.players);
    const [scores, setScores] = useState(logic.GameState.scores);
    const [winner, setWinner] = useState(logic.GameState.winner);
    const [board, setBoard] = useState(logic.GameState.board);
    const [isAIGameMode, setAIGameMode] = useState(!!AI);

    function updateGameState(game: GameState) {
        setScores([...game.scores]);
        setPlayers({...game.players});
        setWinner(game.winner);
        setBoard([...game.board]);
    }

    function toggleGameMode() {
        const gameState = !isAIGameMode ? gameModePvP.reset() : gameModePvE.reset();
        setAIGameMode(!isAIGameMode);
        updateGameState(gameState);
    }

    return (
        <div>
            {
                isAIGameMode
                ?
                <TicTacToeBoard board={board} logic={gameModePvE} gameSpeed={gameSpeed} updateGameState={updateGameState} />
                :
                <TicTacToeBoard board={board} logic={gameModePvP} gameSpeed={gameSpeed} updateGameState={updateGameState}/> 
            }
            <ScoreTicTacToe 
                players={players}
                scores={scores} />
            <GameModeSwitcher
                toggleGameMode={toggleGameMode}
                isAIGameMode={isAIGameMode} />
        </div>
    )
}
