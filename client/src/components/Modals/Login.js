import React, { useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { useUserContext } from '../../contexts/UserContext';
import { useLoginContext } from '../../contexts/LoginContext';

const Login = () => {
    const [registerStudentName, setRegisterStudentName] = useState('');
    const [registerStudentPassword, setRegisterStudentPassword] = useState('');
    const [registerAdminName, setRegisterAdminName] = useState('');
    const [registerAdminPassword, setRegisterAdminPassword] = useState('');

    const [loginStudentName, setLoginStudentName] = useState('');
    const [loginStudentPassword, setLoginStudentPassword] = useState('');
    const [loginAdminName, setLoginAdminName] = useState('');
    const [loginAdminPassword, setLoginAdminPassword] = useState('');
    const [state, dispatch] = useLoginContext();

    const registerStudent = () => {
        axios({
            method: "post",
            data: {
                studentname: registerStudentName,
                password: registerStudentPassword,
            },
            withCredentials: true,
            url: "http://localhost:4000/register",
        })
            .then((res) => console.log(res));
    };

    const registerAdmin = () => {
        axios({
            method: "post",
            data: {
                adminname: registerAdminName,
                password: registerAdminPassword,
            },
            withCredentials: true,
            url: "http://localhost:4000/register",
        })
            .then((res) => console.log(res));
    };

    const loginStudent = () => {

    };

    const loginAdmin = () => {

    };

    const close = () => dispatch({ type:'close-modal' });

    return (
        (state.isStudentLogin ? 
        
        <div style={modal}>
            <section style={modalMain}>
                <div className='row'>

                    <h1>Register</h1>
                    <input
                        placeholder = "Student Name"
                        onChange={(e) => setRegisterStudentName(e.target.value)}
                    />
                    <input
                        placeholder = "Student Password"
                        onChange={(e) => setRegisterStudentPassword(e.target.value)}
                    />
                    <button onClick={registerStudent}>Submit</button>
                </div>

                <div className='row'>
                    <h1>Login</h1>
                    <input
                        placeholder = "Student Name"
                        onChange={(e) => setLoginStudentName(e.target.value)}
                    />
                    <input
                        placeholder = "Student Password"
                        onChange={(e) => setLoginStudentPassword(e.target.value)}
                    />
                    <button onClick={loginStudent}>Submit</button>
                    <button onClick={close}>Close</button>
                </div>
            </section>
        </div>
         : 
        <div style={modal}>
            <section style={modalMain}>
                <div className='row'>

                    <h1>Register</h1>
                    <input
                        placeholder = "Admin Name"
                        onChange={(e) => setRegisterAdminName(e.target.value)}
                    />
                    <input
                        placeholder = "Admin Password"
                        onChange={(e) => setRegisterAdminPassword(e.target.value)}
                    />
                    <button onClick={registerAdmin}>Submit</button>
                </div>

                <div className='row'>
                    <h1>Login</h1>
                    <input
                        placeholder = "Admin Name"
                        onChange={(e) => setLoginAdminName(e.target.value)}
                    />
                    <input
                        placeholder = "Admin Password"
                        onChange={(e) => setLoginAdminPassword(e.target.value)}
                    />
                    <button onClick={loginAdmin}>Submit</button>
                    <button onClick={close}>Close</button>
                </div>
            </section>
        </div>
        )
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