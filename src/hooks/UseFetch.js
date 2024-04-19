import { useEffect, useState } from 'react'

export const UseFetch = (url) => {


    const [dataState, setDataState] = useState({
        data: null,
        isloading: true,
        hasError: null,
    })

    const getFetch = async () => {

        setDataState({
            ...dataState,
            isloading: true,
            hasError: null,
        });

        const res = await fetch(url);
        const data = await res.json();

        setDataState({
            ...dataState,
            data: data,
            isloading: false,
            hasError: null,
        });

    }

    useEffect(() => {

        getFetch();

    }, [url])


    return {

        data: dataState.data,
        isloading: dataState.isloading,
        hasError: dataState.hasError,

    };
}
