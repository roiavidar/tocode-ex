import React, { ChangeEvent } from 'react';

export function SimpleFilterInput(props: {
    filter: string,
    setFilter: (filter: string) => void
}) {
  const { filter, setFilter } = props;
  // typescript can guess the event type on its own when writing inline handlers
    return (
        <input
          type="text"
          value={filter}
          onChange={ev => {setFilter(ev.target.value)}}
        />
    )
}
