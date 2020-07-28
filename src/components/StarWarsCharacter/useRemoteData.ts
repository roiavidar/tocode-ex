import { useState, useEffect } from "react";

export default function useRemoteData(url: string, urlParams: string[]) {
    const [data, setData] = useState<any>({});
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const NOT_FOUND = 'Not found';
    const NO_RESULTS = ' ';

    useEffect(() => {
        let xhr: JQuery.jqXHR<any>;
        if (!urlParams[0]) { // no id is passed
            setError(NO_RESULTS);
        } else { // id exist
            xhr = $.getJSON(url, function success(data: any) {
                clearError();
                setData(data);
                setLoading(false);
            }).fail(function (data: {
                responseJSON?: any
            }) {
                setError((data.responseJSON && data.responseJSON.detail) || NOT_FOUND);
                clearData();
                setLoading(false);
            });
        }

        return function cancel() {
            setLoading(true);
            clearError();
            xhr && xhr.abort();
        };
    }, [url]);

    function clearError() {
        setError('');
    }

    function clearData() {
        setData({});
    }

    return [data, loading, error];
}