import Player  from '@vimeo/player';
import IMoviePlayer from './MoviePlayer.model';

export default class VimeoMovieService implements IMoviePlayer {
    private player?: Player;

    createPlayer(elementId: string, movieId: number) {
        this.player = new Player(elementId, {
            id: movieId
        });
    };

    loadVideo(movieId: number) {
        this.player?.loadVideo(movieId);
    }
}