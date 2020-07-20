import React, { ChangeEvent } from 'react';

export function SimpleFilterInput(props: {
    filter: string,
    setFilter: (filter: string) => void
}) {
    return (
        <input type="text" value={props.filter} onChange={(event: ChangeEvent<HTMLInputElement>)=> {props.setFilter(event.target.value)}}></input>
    )
}