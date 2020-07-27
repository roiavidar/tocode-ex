import { useEffect, useState } from 'react';
import $ from 'jquery';

export default function FetchData(props: {
    url: string,
    dataFetched?: (data: any) => void
    renderItem: (data: any) => JSX.Element
}) {
    const {url, renderItem, dataFetched} = props;
    const [data, setData] = useState({});

    useEffect(() => {
        const xhr = $.getJSON(url, function success(data: any) {
            updateData(data);
        });

        return function cancel() {
            updateData({});
            xhr.abort();
        };
    }, [url]);

    function updateData(data: any) {
        setData(data);
        dataFetched && dataFetched(data);
    }

    return (
        renderItem(data)
    )
}