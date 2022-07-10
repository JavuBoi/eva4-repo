import React, { useState } from 'react'
import InputGroup from '../components/InputGroup'
import MessageBox from '../components/MessageBox'
import config from '../helpers/config.json'
import { useNavigate } from 'react-router-dom'
import useAuth from '../helpers/useAuth'

const Login = () => {
    const [nickname, setNickname] = useState("")
    const [password, setPassword] = useState("")
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [error, setError] = useState(false)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nickname: nickname, password: password, operatorId: config.operatorId })
    }
    const navigate = useNavigate()
    const { setAuth } = useAuth()

    const handleLogin = async (event) => {
        event.preventDefault()
        setButtonDisabled(true)
        setError(false)

        if (nickname.length === 0 || password.length === 0) {
            setError(true)
            setErrorMessage("Debe completar todos los campos.")
            setButtonDisabled(false)
            return
        }

        fetch(config.apiURL + 'login', requestOptions)
            .then(res => {
                switch (res.status) {
                    case 403:
                        setButtonDisabled(false)
                        setError(true)
                        setErrorMessage("Acceso prohibido.")
                        break
                    case 404:
                        setButtonDisabled(false)
                        setError(true)
                        setErrorMessage("Nombre de usuario o contraseña incorrectos.")
                        break
                    case 500:
                        setButtonDisabled(false)
                        setError(true)
                        setErrorMessage("Fallo interno del servidor.")
                        break
                    default:
                        break
                }
                return res.json()
            })
            .then(result => {

                if (!result.data[0].active) {
                    setError(true)
                    setErrorMessage('El usuario está inactivo.')
                    return
                }

                try {
                    const infoData = result.data[0]
                    const infoUser = JSON.stringify(infoData)

                    const roles = [infoData['level']]
                    setAuth({ infoUser, password, roles })

                    setError(false)
                    navigate('/sales')

                } catch (e) {
                    console.log(e);
                }
                setButtonDisabled(false)
            })
            .catch(_error => { })
    };

    return (
        <div className='hold-transition login-page'>
            <div className="login-box">
                <div className="login-logo">
                    <p>Gigante del Pacífico</p>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Ingresa tus datos para iniciar sesión</p>
                        <form onSubmit={handleLogin}>
                            <InputGroup
                                type="text"
                                value={nickname}
                                onChange={setNickname}
                                placeholder="Usuario"
                                icon="envelope" />
                            <InputGroup
                                type="password"
                                value={password}
                                onChange={setPassword}
                                placeholder="Contraseña"
                                icon="lock" />
                            <div className="row">
                                <div className="col-12">
                                    <button type='submit' disabled={buttonDisabled} className="btn btn-primary btn-block">
                                        {!buttonDisabled && <><i className='fa fa-sign-in-alt' /> Acceder</>}
                                        {buttonDisabled && <><i className='fa fa-spin fa-spinner' /> Accediendo...</>}
                                    </button>
                                </div>
                            </div>
                        </form>
                        <MessageBox active={error} message={errorMessage} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login