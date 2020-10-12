import React, { useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useUserContext } from '../../contexts/UserContext';
import { useLoginContext } from '../../contexts/LoginContext';

const Login = () => {
    const [registerUserName, setRegisterUserName] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [loginUserName, setLoginUserName] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [state, dispatch] = useLoginContext();
    const register = () => {
        axios({
            method: "post",
            data: {
                username: registerUserName,
                password: registerPassword,
            },
            withCredentials: true,
            url: "http://localhost:4000/register",
        })
            .then((res) => console.log(res));
    };
    const login = () => {

    };

    const close = () => dispatch({ type:'close-modal'})

    const placeholderName = state.isStudentLogin ? 'Student Username' : "Admin Username";
    const placeholderPassword = state.isStudentLogin ? 'Student Password' : "Admin Password";

    return (
        
        <div style={modal}>
            <section style={modalMain}>
                <div className='row'>

                    <h1>Register</h1>
                    <input
                        placeholder= {placeholderName}
                        onChange={(e) => setRegisterUserName(e.target.value)}
                    />
                    <input
                        placeholder={placeholderPassword}
                        onChange={(e) => setRegisterPassword(e.target.value)}
                    />
                    <button onClick={register}>Submit</button>
                </div>

                <div className='row'>
                    <h1>Login</h1>
                    <input
                        placeholder={placeholderName}
                        onChange={(e) => setLoginUserName(e.target.value)}
                    />
                    <input
                        placeholder={placeholderPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                    />
                    <button onClick={login}>Submit</button>
                    <button onClick={close}>Close</button>
                </div>
            </section>
        </div>
    )
}

const modal = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.6)'
};

const modalMain = {
    position: "fixed",
    background: 'white',
    width: '80%',
    height: 'auto',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)'
};

const displayBlock = {
    display: 'block'
};

const displayNone = {
    display: 'none'
}

export default Login;