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
    const {filterHandler, filterInput, list, items} = props;
    const [filter, setFilter] = React.useState(null);
    let visibleItems = items;

    if (filter) {
        visibleItems = filterHandler(filter, items);
    }

    return (
        <div>
            {filterInput(filter, setFilter)}
            {list(visibleItems)}
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