import { useEffect, useState } from 'react';
import $ from 'jquery';

export default function FetchData(props: {
    url: string,
    renderItem: (data: any) => JSX.Element
}) {
    const {url, renderItem} = props;
    const [data, setData] = useState({});

    useEffect(() => {
        const xhr = $.getJSON(url, function success(data: any) {
            updateData(data);
        });

        return function cancel() {
            updateData({error: true});
            xhr.abort();
        };
    }, [url]);

    function updateData(data: any) {
        setData(data);
    }

    return (
        renderItem(data)
    )
}