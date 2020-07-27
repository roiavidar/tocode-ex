import React, { useState, useEffect } from 'react';
import {GameState, IAI} from './TicTacToe.model';
import GameModePvP from './GameModePvP';
import GameModePvE from './GameModePvE';
import TicTacToeBoard from './TicTacToeBoard';
import { AI } from './AI';
import TicTacToeEnum  from './constants';
import ScoreTicTacToe from './Score';
import GameModeSwitcher from './GameModeSwitcher';
import {getCellStyle, getMarkSymbol} from './BoardStyleUtil';

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

    const [isAIGameMode, setAIGameMode] = useState(false);
    let logic = getGameModeLogic();
    const [players, setPlayers] = useState(logic.GameState.players);
    const [scores, setScores] = useState(logic.GameState.scores);
    const [winner, setWinner] = useState(logic.GameState.winner);
    const [board, setBoard] = useState(logic.GameState.board);
    const [gameLocked, setGameLocked] = useState(false);

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

    function tryToMark(row: number, col: number) {
        if (gameLocked) return;
        const logic = getGameModeLogic();
        const gameSnapshots = logic.tryToMark(row, col);
        setGameLocked(true);

        gameSnapshots.forEach((game: GameState, index: number) => {
            setTimeout(() => {
                updateGameState(game);
                if (index === gameSnapshots.length - 1) {
                    setGameLocked(false);
                }
            }, gameSpeed*index);
        });
    }

    function getGameModeLogic() {
        return isAIGameMode ? gameModePvE : gameModePvP;
    }

    return (
        <div>
            <TicTacToeBoard 
                    board={board}
                    tryToMark={tryToMark}
                    getCellStyle={getCellStyle}
                    getMarkSymbol={getMarkSymbol}/>
            <ScoreTicTacToe 
                players={players}
                scores={scores} />
            <GameModeSwitcher
                toggleGameMode={toggleGameMode}
                isAIGameMode={isAIGameMode} />
        </div>
    )
}
