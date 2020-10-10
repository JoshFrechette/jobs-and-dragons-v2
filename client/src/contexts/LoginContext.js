import React, { useState, createContext, useReducer, useContext } from 'react';

const LoginContext = createContext();
const { Provider } = LoginContext;

const loginReducer = (state, action) => {
    switch (action.type) {
        case 'student':
            return {
                isOpen: true,
                isStudentLogin: true
            };
        case 'admin':
            return {
                isOpen: true,
                isAdminLogin: true
            }
    }
};

const LoginProvider = ({
    value = {
        isOpen: false,
        isStudentLogin: false,
        isAdminLogin: false
    }
    // const [isOpen, setIsOpen] = useState(false);
    // const [isStudentLogin, setIsStudentLogin] = useState(false);
    // const [isAdminLogin, setIsAdminLogin] = useState(false);
}) => {
    const [state, dispatch] = useReducer(loginReducer, { ...value })

    return <LoginContext.Provider value={[state, dispatch]} {...props}/>

};

const useLoginContext = () => {
    return useContext(LoginContext);
}

export { LoginProvider, useLoginContext };