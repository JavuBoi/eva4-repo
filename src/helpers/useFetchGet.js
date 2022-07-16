import { useState, useEffect } from 'react';
import config from './config.json';

const useFetchGet = (endPoint) => {
    const requestOptions = {
        method: 'GET', headers: { 'Content-Type': 'application/json' }
    };
    const [data, setData] = useState(null);
    const [status, setStatus] = useState(null)

    useEffect(() => {
        console.log("useEffect ran");
        fetch(config.apiURL + endPoint + config.operatorId, requestOptions)
            .then((res) => {
                console.log("fetch started " + endPoint);
                setStatus(res.status)
                return res.json();
            })
            .then((result) => {
                setData(result.data);
                console.log("fetch ended " + endPoint);
            })
    }, [])

    return { data, status }
}

export default useFetchGet