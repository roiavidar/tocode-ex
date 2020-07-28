import React, { ChangeEvent } from 'react';

export function SimpleFilterInput(props: {
    filter: string,
    setFilter: (filter: string) => void
}) {
    const {filter, setFilter} = props;
    return (
        <input type="text" value={filter} onChange={(event: ChangeEvent<HTMLInputElement>)=> {setFilter(event.target.value)}}></input>
    )
}
