import React, { 
    createContext, 
    useReducer, 
    useContext,
    useDispatch, 
} from 'react';

const LoginContext = createContext();
const { Provider } = LoginContext;

const loginReducer = (state, action) => {
    switch (action.type) {
        case 'student':
            return {
                isOpen: true,
                isStudentLogin: true,
                isAdminLogin: false
            };
        case 'admin':
            return {
                isOpen: true,
                isAdminLogin: true,
                isStudentLogin: false
            };
        case 'close-modal':
            return {
                isOpen: false
            }
        default: 
            return {
            ...state,
        };
    }
};

const LoginProvider = ({
    value = {
        isOpen: false,
        isStudentLogin: false,
        isAdminLogin: false
    },

    ...props
}) => {
    const [state, dispatch] = useReducer(loginReducer, { ...value })

    return <Provider value={[state, dispatch]} {...props}/>
};

const useLoginContext = () => {
    return useContext(LoginContext);
}

export { LoginProvider, useLoginContext };