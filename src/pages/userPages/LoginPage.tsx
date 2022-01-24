import React from 'react';
import Header from '../../components/generic/Header';
import LoginForm from '../../components/session/LoginForm';

const LoginPage = () => {
    return (
        <div>
            <Header text="login page" />
            <LoginForm />
        </div>
    );
};

export default LoginPage;
