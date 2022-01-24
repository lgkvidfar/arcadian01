import React from 'react';
import Header from '../../components/generic/Header';
import SubHeader from '../../components/generic/SubHeader';
import NewUserInputBuyer from '../../components/user/NewUserInputBuyer';

const RegisterPage = () => {
    return (
        <div>
            <Header text="register page" />
            <SubHeader text="this is where you sign up" />
            <NewUserInputBuyer />
        </div>
    );
};

export default RegisterPage;
