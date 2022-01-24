import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <Link to="/playground">playground</Link>
            {' | '}
            <Link to="/">home</Link>
            {' | '}
            <Link to="/about">about</Link>
            {' | '}
            <Link to="/todos">todos</Link>
            {' | '}
            <Link to="/users/get/all">users</Link>
            {' | '}
            <Link to="/users/login">login</Link>
            {' | '}
            <Link to="/users/register">register</Link>
            {' | '}
            <Link to="/products/get/all">products</Link> |
        </nav>
    );
};

export default NavBar;
