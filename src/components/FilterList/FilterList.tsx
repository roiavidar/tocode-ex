import React from 'react';
import { SimpleFilterInput } from './SimpleFilter';
import { SimpleList } from './SimpleList';

export function FilterList(
    props: {
        filterHandler: (filter: any, items: any) => any;
        filterInput: (filter: any, setFilter: (filter: any) => void) => {},
        list: (items: any) => {},
        items: any
    }
) {
    const [filter, setFilter] = React.useState(null);
    let visibleItems = props.items;

    if (filter) {
        visibleItems = props.filterHandler(filter, props.items);
    }

    return (
        <div>
            {props.filterInput(filter, setFilter)}
            {props.list(visibleItems)}
        </div>
    )
}

FilterList.defaultProps = {
    filterHandler: function filterHandler(filter: string, items: string[]) {
        return items.filter(item => item.includes(filter))
    },
    filterInput: (filter: string, setFilter: (filter: string) => void) => <SimpleFilterInput 
        filter={filter}
        setFilter={setFilter} />
    ,
    list: (items: string[]) => <SimpleList items={items} />
}