import { useEffect, useState } from 'react';
import $ from 'jquery';

export default function FetchStarWarsData(props: {
    itemId: string,
    category: string,
    dataFetched?: (data: any) => void
    renderItem: (data: any) => JSX.Element
}) {
    const {itemId, category, renderItem, dataFetched} = props;
    const [data, setData] = useState({});

    useEffect(() => {
        const xhr = $.getJSON(`http://swapi.dev/api/${category}/${itemId}/`, function success(data: any) {
            updateData(data);
        });

        return function cancel() {
            updateData({});
            xhr.abort();
        };
    }, [itemId, category]);

    function updateData(data: any) {
        setData(data);
        dataFetched && dataFetched(data);
    }

    return (
        renderItem(data)
    )
}