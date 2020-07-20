import React from 'react';

export function SimpleList(props: {
    items: string[]
}) {

    return (
        <ul>
            {props.items.map((item: string) => <li>{item}</li>)}
        </ul>
    )
}