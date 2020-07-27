import React, { useEffect, ChangeEvent, useState, useRef } from 'react';
import Player  from '@vimeo/player';

export default function MoviePlayer(props: {
    movieId: number
}) {
    const {movieId} = props;
    const [movie, setMovie] = useState<number>(movieId);
    const player = useRef<Player | null>(null);

    useEffect(() => {
        player.current = new Player('moviePlayer', {
            id: movie,
            width: 640
        });
            
        player.current.on('play', function() {
            console.log('played the video!');
        });
    }, []);

    useEffect(() => {
        if (player.current) {
            player.current.loadVideo(movie);
        }
    }, [movie]);

    
    function onMovieChangeHandler(event: ChangeEvent<HTMLInputElement>) {
        setMovie(Number(event.target.value));
    }

    return (
        <div>
            <input type="text" value={movie} onChange={onMovieChangeHandler} />
            <div id='moviePlayer'></div>
        </div>
    )
}