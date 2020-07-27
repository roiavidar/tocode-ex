import React, { useState, useEffect } from 'react';
import FetchStarWarsData from '../FetchData/FetchData';
import StarWarsMovie from '../StarWarsMovie/StarWarsMovie';
import StarWarsUrlBuilder from '../../services/StartWarsUrlBuilder';
import StarWarsActor from '../StarWarsActor/StarWarsActor';
import { isEmptyObject } from 'jquery';

export default function ActorMoviesCard(props: {
    actorId: string
}) {
    const { actorId } = props;
    const [actor, setActorId] = useState<string>(actorId);
    const [films, setFilms] = useState<string[]>([]);
    const starWarsUrlBuilder = new StarWarsUrlBuilder();

    useEffect(() =>  {

    }, [actorId])

    function updateFilms(data: {
        films: string[]
    }) {
        const {films} = data;
        if (films) {
            setFilms([...films]);
        } else {
            setFilms([]);
        }
        
    }

    function renderFilms() {
        return films.map((filmUrl: string) => (
            <FetchStarWarsData 
                key={filmUrl}
                url={filmUrl}
                renderItem={(data: any)=> (
                    !isEmptyObject(data) ? <StarWarsMovie {...data} /> : renderLoading()
                )} />
        ));
    }

    function renderInputForActorId() {
        return (
            <input type="text" value={actor} onChange={(event) => { setActorId(event?.target.value) }} />
        )
    }

    function renderLoading() {
        return (
            <div>
                Loading ...
            </div>
        )
    }

    return (
        <div>
            {renderInputForActorId()}
            {actor && <FetchStarWarsData 
                url={starWarsUrlBuilder.getUrl(actor, 'people')}
                dataFetched={updateFilms}
                renderItem={(data: any)=> (
                    !isEmptyObject(data) ? <StarWarsActor {...data} /> : renderLoading()
                )}
            />}
            {renderFilms()}
        </div>
         
    )
}
