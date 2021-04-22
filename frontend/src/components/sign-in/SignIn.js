import React from 'react';
import AppService from '../../services/appService';
import AuthPattern from '../../patterns/AuthPattern/AuthPattern';


const SignIn = () => {
    const app = new AppService();
    const loginSchema = {
        email: {
            value: '',
            valid: true,
            type: 'email',
            label: 'Почта',
            touched: false,
            validation: {
                email: true,
                required: true
            },
            error: 'Заполните поле'
        },
        password: {
            value: '',
            valid: true,
            touched: false,
            label: 'Пароль',
            type: 'password',
            validation: {
                minLength: 6,
                required: true
            },
            error: 'Заполните поле'
        }
    };
    return(
        <AuthPattern type={app._type} schema={loginSchema}/>
    );
};


export default SignIn;