import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const useAuth = (isAuth) => {
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuth) {
            navigate('/')
        }
    }, [isAuth])
}

export default useAuth;