import React, { useState, useEffect } from 'react';
import {GameState, IAI} from './TicTacToe.model';
import GameModePvP from './GameModePvP';
import GameModePvE from './GameModePvE';
import TicTacToeBoard from './TicTacToeBoard';
import { AI } from './AI';
import TicTacToeEnum  from './constants';
import ScoreTicTacToe from './Score';
import GameModeSwitcher from './GameModeSwitcher';

const { FIRST_PLAYER, SECOND_PLAYER } = TicTacToeEnum;

const gameModePvE = new GameModePvE({
    computerAI: new AI(),
    computerTurn: SECOND_PLAYER
});
const gameModePvP = new GameModePvP();

export default function TicTacToe(props: {
    gameSpeed: number,
    computerAI?: { isFirst: boolean, logic: IAI }
}) {
    const {gameSpeed, computerAI} = props;

    useEffect(() => {
        if (computerAI) {
            gameModePvE.computerTurn = computerAI.isFirst ? FIRST_PLAYER : SECOND_PLAYER;
            gameModePvE.computerAI = computerAI.logic || gameModePvE.computerAI;

           triggerComputerToStart(isAIGameMode);
        }
    }, []);

    let logic = !!computerAI ? gameModePvE : gameModePvP;
    const [players, setPlayers] = useState(logic.GameState.players);
    const [scores, setScores] = useState(logic.GameState.scores);
    const [winner, setWinner] = useState(logic.GameState.winner);
    const [board, setBoard] = useState(logic.GameState.board);
    const [isAIGameMode, setAIGameMode] = useState(!!computerAI);

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
        triggerComputerToStart(!isAIGameMode);
    }

    function triggerComputerToStart(isAIGameMode: boolean) {
        if (isAIGameMode && computerAI && computerAI.isFirst) {
            const gameState = gameModePvE.newGame();
            updateGameState(gameState);
        }
    }

    return (
        <div>
            <TicTacToeBoard 
                    board={board}
                    logic={isAIGameMode ? gameModePvE : gameModePvP}
                    gameSpeed={gameSpeed}
                    updateGameState={updateGameState}/>
            <ScoreTicTacToe 
                players={players}
                scores={scores} />
            <GameModeSwitcher
                toggleGameMode={toggleGameMode}
                isAIGameMode={isAIGameMode} />
        </div>
    )
}
