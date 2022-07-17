import { useState, useEffect } from 'react';
import config from './config.json';

const useFetchGet = (endPoint) => {
    const requestOptions = {
        method: 'GET', headers: { 'Content-Type': 'application/json' }
    };
    const [data, setData] = useState(null);
    const [status, setStatus] = useState(null)

    useEffect(() => {
        fetch(config.apiURL + endPoint + config.operatorId, requestOptions)
            .then((res) => {
                setStatus(res.status)
                return res.json();
            })
            .then((result) => {
                setData(result.data);
            })
    }, [])

    return { data, status }
}

// // Prototipo
//     useEffect(() => {
//         const fetchData = async () => {
//             const res = await fetch(config.apiURL + endPoint + config.operatorId, requestOptions)

//             setStatus(res.status)
//             setData(await res.json())

//         }
//         fetchData()
//     }, [])

//     return { data, status }
// }

export default useFetchGet