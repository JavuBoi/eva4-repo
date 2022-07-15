import { useState } from 'react';
import config from '../helpers/config.json';

const useFetch = (endPoint) => {
    const [data, setData] = useState(null);
    const requestOptions = {
        method: 'GET', headers: { 'Content-Type': 'application/json' }
    };
    fetch(config.apiURL + endPoint, requestOptions)
        .then((res) => {
            return res.json();
        })
        .then((result) => {
            setData(result.data);
        });

    return { data }
}