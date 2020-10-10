import React, { useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useUserContext } from '../../contexts/UserContext';


const Login = () => {
    const [registerUserName, setRegisterUserName] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [loginUserName, setLoginUserName] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [state] = useUserContext();
    const register = () => {
        axios({
            method: "post",
            data: {
                username: registerUserName,
                password: registerPassword,
            },
            withCredentials: true,
            url: "http://localhost:4000/resgister",
        })
        .then((res) => console.log(res));
    };
    const login = () => {};

    return (
        <div className='modal-content'>
            <div className='row'>
                
                <h1>Register</h1>
                <input
                    placeholder="Student Username"
                    onChange={(e) => setRegisterUserName(e.target.value)}
                />
                <input
                    placeholder="Student Password"
                    onChange={(e) => setRegisterPassword(e.target.value)}
                />
                <button onClick={register}>Submit</button>
            </div>   

            <div className='row'>
                <h1>Login</h1>
                <input
                    placeholder="Student Username"
                    onChange={(e) => setLoginUserName(e.target.value)}
                />
                <input
                    placeholder="Student Password"
                    onChange={(e) => setLoginPassword(e.target.value)}
                />
                <button onClick={login}>Submit</button>
            </div>   
        </div>
    )
}

export default Login;