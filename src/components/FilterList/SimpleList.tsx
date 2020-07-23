import React from 'react';

export function SimpleList(props: {
    items: string[]
}) {
    const {items} = props;
    return (
        <ul>
            {items.map((item: string) => <li>{item}</li>)}
        </ul>
    )
}