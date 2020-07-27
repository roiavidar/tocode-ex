import React, { useEffect, ChangeEvent, useState } from 'react';
import IMoviePlayer from './MoviePlayer.model';

export default function MoviePlayer(props: {
    movieId: number,
    moviePlayer: IMoviePlayer
}) {
    const {movieId, moviePlayer} = props;
    const [movie, setMovie] = useState<number>(movieId);

    useEffect(() => {
        moviePlayer.createPlayer('moviePlayer', movie);
    }, []);

    useEffect(() => {
        moviePlayer.loadVideo(movie);
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