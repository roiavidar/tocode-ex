import React from 'react';

export default function GameModeSwitcher(props: {
    toggleGameMode: () => void,
    isAIGameMode: boolean
}) {
    const {toggleGameMode, isAIGameMode} = props;

    return (
        <button onClick={toggleGameMode}>
            {
                isAIGameMode 
                ?
                'AI game mode!'
                :
                '2 players game mode!'
            }
        </button>
    )
}