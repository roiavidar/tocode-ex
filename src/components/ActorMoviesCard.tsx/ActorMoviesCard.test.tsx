import React from 'react';
import { render, waitFor } from '@testing-library/react';
import ActorMoviesCard from './ActorMoviesCard';

test('should render actor movies', async () => {
    const component = render(<ActorMoviesCard actorId={'1'} />);
    await waitFor(() => expect(component.queryByText('Loading')).toBeNull())
});

test('should render actor movies when typing new one', async () => {
    const component = render(<ActorMoviesCard actorId={'1'} />);
    await waitFor(() => {
        expect(component.queryByText('Name'))
        expect(component.queryByText('Title'))
    });

    const inputElem = document.querySelector('input');

    expect(inputElem).not.toBeNull();
    
    if(inputElem) {
        inputElem.value = '2';
        await waitFor(() => {
            expect(component.queryByText('Name'))
            expect(component.queryByText('Title'))
        });
    }

});