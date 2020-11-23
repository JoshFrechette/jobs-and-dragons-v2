import React, { useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { api } from '../../utils/api';
// import { useUserContext } from '../../contexts/UserContext';
import { useLoginContext } from '../../contexts/LoginContext';

// Page redirects to be implemented once Connection issues can be resolved. Registration will be done seperately from 
// logging in, 

const Login = () => {
    const history = useHistory();
    // registering states
    const [registerStudentName, setRegisterStudentName] = useState('');
    const [registerStudentPassword, setRegisterStudentPassword] = useState('');
    // logging in states
    const [loginStudentName, setLoginStudentName] = useState('');
    const [loginStudentPassword, setLoginStudentPassword] = useState('');

    const [state, dispatch] = useLoginContext();


    // Registering functions
    const registerStudent = () => {
        axios({
            method: "post",
            data: {
                username: registerStudentName,
                password: registerStudentPassword,
            },
            withCredentials: true,
            url: "http://localhost:3000/api/v1/users/register",
        }).then((res) => console.log(res));
    };

    // Logging in functions
    const loginStudent = () => {
        axios.post('/', {
            username: loginStudentName,
            password: loginStudentPassword,
        })
            .then(response => {
                console.log(response)
                if (!response.data.errmsg) {
                    dispatch({ type: 'loggedIn' })
                    // history.push('/profile')
                    console.log(state, 'successful signin')
                    		// this.setState({ //redirect to profile page
                    		// 	redirectTo: '/profile'
                    		// })
                    } else {
                        console.log('studentname already taken')
                }
            }).catch(error => {
                console.log('signin error: ')
                console.log(error)
            })
    };

    const close = () => dispatch({ type: 'close-modal' });

    return (
        <div style={modal}>
            <section style={modalMain}>
                <div className='row'>

                    <h1>Register</h1>
                    <input
                        placeholder="Student Name"
                        onChange={(e) => setRegisterStudentName(e.target.value)}
                    />
                    <input
                        placeholder="Student Password"
                        onChange={(e) => setRegisterStudentPassword(e.target.value)}
                    />
                    <button onClick={registerStudent}>Submit</button>
                </div>

                <div className='row'>
                    <h1>Login</h1>
                    <input
                        placeholder="Student Name"
                        onChange={(e) => setLoginStudentName(e.target.value)}
                    />
                    <input
                        placeholder="Student Password"
                        onChange={(e) => setLoginStudentPassword(e.target.value)}
                    />
                    <button onClick={loginStudent}>Submit</button>
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

// const displayBlock = {
//     display: 'block'
// };

// const displayNone = {
//     display: 'none'
// }

export default Login;