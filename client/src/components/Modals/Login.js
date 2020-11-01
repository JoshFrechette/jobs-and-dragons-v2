import React, { useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { api } from '../../utils/api';
// import { useUserContext } from '../../contexts/UserContext';
import { useLoginContext } from '../../contexts/LoginContext';

// Page redirects to be implemented once Connection issues can be resolved. Registration will be done seperately from 
// logging in, 

const Login = () => {
    // registering states
    const [registerStudentName, setRegisterStudentName] = useState('');
    const [registerStudentPassword, setRegisterStudentPassword] = useState('');
    const [registerAdminName, setRegisterAdminName] = useState('');
    const [registerAdminPassword, setRegisterAdminPassword] = useState('');
    // logging in states
    const [loginStudentName, setLoginStudentName] = useState('');
    const [loginStudentPassword, setLoginStudentPassword] = useState('');
    const [loginAdminName, setLoginAdminName] = useState('');
    const [loginAdminPassword, setLoginAdminPassword] = useState('');

    const [state, dispatch] = useLoginContext();


    // Registering functions
    const registerStudent = () => {
        // api.addUserInfo({
        //         username: registerStudentName,
        //         password: registerStudentPassword,
        // })

        // axios.post('/', {
        //         studentname: registerStudentName,
        //         password: registerStudentPassword,
		// })
		// 	.then(response => {
		// 		console.log(response.config.data)
		// 		if (!response.data.errmsg) {
		// 			console.log('successful signup')
			// 		this.setState({ //redirect to login page
			// 			redirectTo: '/login'
			// 		})
			// 	} else {
			// 		console.log('studentname already taken')
			// 	}
			// }).catch(error => {
			// 	console.log('signup error: ')
			// 	console.log(error)

            // })
            
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

    const registerAdmin = () => {
        axios({
            method: "post",
            data: {
                username: registerAdminName,
                password: registerAdminPassword,
            },
            withCredentials: true,
            url: "http://localhost:3000/api/v1/admin/register",
        }).then((res) => console.log(res));
    //     axios.post('/admin', {
    //         username: registerAdminName,
    //         password: registerAdminPassword,
    // })
    //     .then(response => {
    //         console.log(response)
    //         if (!response.data.errmsg) {
    //             console.log('successful signup')
        // 		this.setState({ //redirect to login page
        // 			redirectTo: '/login'
        // 		})
        //     } else {
        //         console.log('adminname already taken')
        //     }
        // }).catch(error => {
        //     console.log('signup error: ')
        //     console.log(error)

        // })
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
                console.log('successful signin')
        // 		this.setState({ //redirect to login page
        // 			redirectTo: '/login'
        // 		})
            // } else {
            //     console.log('studentname already taken')
            }
        }).catch(error => {
            console.log('signin error: ')
            console.log(error)

        })
    };

    const loginAdmin = () => {
        axios.post('/admin', {
            adminname: loginAdminName,
            password: loginAdminPassword,
    })
        .then(response => {
            console.log(response)
            if (!response.data.errmsg) {
                console.log('successful signin')
        // 		this.setState({ //redirect to login page
        // 			redirectTo: '/login'
        // 		})
            // } else {
            //     console.log('studentname already taken')
            }
        }).catch(error => {
            console.log('signin error: ')
            console.log(error)
        })
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