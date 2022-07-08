import React, { useState } from 'react'
import InputGroup from '../components/InputGroup'
import MessageBox from '../components/MessageBox'
import { useNavigate } from 'react-router-dom'
import config from '../helpers/config.json'

const Login = () => {
    const [nickname, setNickname] = useState("")
    const [password, setPassword] = useState("")
    const [buttonState, setButtonState] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [error, setError] = useState(false)
    const login = useNavigate()

    const handleLogin = (event) => {
        setButtonState(true)
        event.preventDefault()
        console.log(buttonState)

        fetch(config.apiURL + 'login', requestOptions)
            .then(res => {
                switch(res.status){
                    //
                }
            })
            .then(data => {
                if (data[0].password === password) {
                    login('/sales')
                }
            })
        setButtonState(false)
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
                                    <button type='submit' disabled={buttonState} className="btn btn-primary btn-block">
                                        {!buttonState && <><i className='fa fa-sign-in'></i> Acceder</>}
                                        {buttonState && <><i className='fa fa-spin fa-spinner'></i> Accediendo...</>}</button>
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