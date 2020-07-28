import React, { useState } from 'react';
import FetchStarWarsData from '../FetchData/FetchData';
import StarWarsMovie from '../StarWarsMovie/StarWarsMovie';
import StarWarsUrlBuilder from '../../services/StartWarsUrlBuilder';
import StarWarsActor from '../StarWarsActor/StarWarsActor';
import { isEmptyObject } from 'jquery';

export default function ActorMoviesCard(props: {
    actorId?: string
}) {
    const { actorId } = props;
    const [actor, setActorId] = useState<string>(actorId || '');
    const starWarsUrlBuilder = new StarWarsUrlBuilder();

    function renderFilms(films :any) {
        return films.map((filmUrl: string) => (
            <FetchStarWarsData 
                key={filmUrl}
                url={filmUrl}
                renderItem={(data: any)=> (
                    isDataValid(data) ? <StarWarsMovie {...data} /> : renderLoading(data)
                )} />
        ));
    }

    function renderInputForActorId() {
        return (
            <input type="text" value={actor} onChange={(event) => { setActorId(event?.target.value) }} />
        )
    }

    function isDataValid(data: any) {
        return !isEmptyObject(data) && !data.error;
    }

    function renderLoading(data: {
        error: boolean
    }) {
        const { error } = data;
        return (
            <div>
                {!error ? 'Loading ...' : ''}
            </div>
        )
    }

    return (
        <div>
            {renderInputForActorId()}
            {actor && <FetchStarWarsData 
                url={starWarsUrlBuilder.getUrl(actor, 'people')}
                renderItem={(data: any)=> {
                    return <>
                                {isDataValid(data) ? <StarWarsActor {...data} /> : renderLoading(data)}
                                {data.films && renderFilms(data.films)}
                            </>
                }}
            />}
        </div>
         
    )
}
