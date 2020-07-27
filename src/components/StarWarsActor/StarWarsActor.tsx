import React from 'react';

export default function StarWarsActor(props: {
    name: string,
    hair_color: string       
}) {
    const { name, hair_color} = props;

    return (
        <div>
            <p>
                <b>Name:</b> {name}
            </p>
            <p>
                <b>Hair Color:</b> {hair_color}
            </p>
        </div>
    )
}