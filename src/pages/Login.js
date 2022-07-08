import React, { useState } from 'react'
import InputGroup from '../components/InputGroup'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const login = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault()

        fetch('http://localhost:8000/login?nickname=' + email)
            .then(res => {
                return res.json()
            })
            .then(data => {
                if (data[0].password === password) {
                    login('/sales')
                }
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
                                type="email"
                                value={email}
                                onChange={setEmail}
                                placeholder="Email"
                                icon="envelope" />
                            <InputGroup
                                type="password"
                                value={password}
                                onChange={setPassword}
                                placeholder="Contraseña"
                                icon="lock" />
                            <div className="row">
                                <div className="col-12">
                                    <button type='submit' className="btn btn-primary btn-block">Iniciar Sesión</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login