import React from 'react';
import useRemoteData from './useRemoteData';

export default function StarwarsCharacter(props: {
    id: string
}) {
    const { id } = props;
    const [data, isLoading, error] = useRemoteData(`https://swapi.dev/api/people/${id}/`, [id]);

    if (error) {
        return <p className='error'>{error}</p>
    }

    if (isLoading) {
        return <p>Please wait, loading data...</p>
    }

    return (
        <div>
            <p>Character name: {data.name}</p>
        </div>
    );
}