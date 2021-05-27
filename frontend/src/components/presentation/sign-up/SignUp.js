import React from 'react';
import Auth from '../auth/Auth';
import AuthView from '../auth-view/AuthView';
import AppService from '../../../services/appService';


const SignUp = () => {
    const app = new AppService();
    const registerSchema = {
        name: {
            value: '',
            valid: true,
            label: 'Имя',
            touched: false,
            type: 'name',
            validation: {
                minLength: 1,
                required: true
            },
            error: 'Обязательно'
        },
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
            error: 'Обязательно'
        },
        password: {
            equality: false,
            value: '',
            valid: true,
            touched: false,
            label: 'Пароль',
            type: 'password',
            validation: {
                minLength: 6,
                required: true
            },
            error: 'Обязательно'
        },
        confirmPassword: {
            equality: false,
            value: '',
            valid: true,
            touched: false,
            type: 'password',
            validation: {
                minLength: 6,
                required: true,
            },
            error: 'Обязательно',
            label: 'Подтвердить пароль',
        }
    };
    return(
        <AuthView>
            <Auth auth={!app._auth} schema={registerSchema}/>
        </AuthView>
    );
};


export default SignUp;