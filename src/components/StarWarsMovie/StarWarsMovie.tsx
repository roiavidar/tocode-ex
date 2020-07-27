import React from 'react';

export default function StarWarsMovie(props: {
    title: string,
    opening_crawl: string       
}) {
    const {title, opening_crawl} = props;

    return (
        <div>
            <p>
                <b>Title:</b> {title}
            </p>
            <p>
                <b>Opening Crawl:</b> {opening_crawl}
            </p>
        </div>
    )
}