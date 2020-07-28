import React, { useState } from 'react';
import StarwarsCharacter from './StarWarsCharacter';

export default function FindStarWarsCharacter() {
    const [characterId, setCharacterId] = useState<string>('1');
    return (
        <div>
            <input type="text" placeholder='type character id' value={characterId} onChange={(event) => { setCharacterId(event.target.value) }} />
            <StarwarsCharacter id={characterId} />
        </div>
    )
}