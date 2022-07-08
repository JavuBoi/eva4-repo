import React, { useState } from 'react'
import InputGroup from '../components/InputGroup'
import MessageBox from '../components/MessageBox'
import config from '../helpers/config.json'
// import { useNavigate } from 'react-router-dom'

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
    // const login = useNavigate()

    const handleLogin = async (event) => {
        event.preventDefault()
        setButtonDisabled(true)

        if (nickname.length === 0 || password.length === 0) {
            setError(true)
            setErrorMessage("Debe completar todos los campos.")
            setButtonDisabled(false)
            return
        }

        fetch(config.apiURL + 'login', requestOptions)
            .then(res => {
                switch (res.status) {
                    case 400:
                        setError(true)
                        setErrorMessage("La petición está mal formulada.")
                        break
                    case 401:
                        setError(true)
                        setErrorMessage("Acceso no autorizado.")
                        break
                    case 403:
                        setError(true)
                        setErrorMessage("Acceso prohibido.")
                        break
                    case 404:
                        setError(true)
                        setErrorMessage("Nombre de usuario o contraseña incorrectos.")
                        break
                    case 500:
                        setError(true)
                        setErrorMessage("Fallo interno del servidor.")
                        break
                    default:
                        break
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                setButtonDisabled(false)
            })
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
                                        {!buttonDisabled && <><i className='fa fa-sign-in'></i> Acceder</>}
                                        {buttonDisabled && <><i className='fa fa-spin fa-spinner'></i> Accediendo...</>}
                                    </button>
                                </div>
                            </div>
                        </form>
                        <MessageBox active={error} message={errorMessage} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login