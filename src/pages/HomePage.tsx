import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import LogoutButton from '../components/session/LogoutButton';

const HomePage = () => {
    const current = useAppSelector((state) => state.user.current);

    return (
        <div>
            {current && <p>how can we help you today {current.user.username}?</p>}
            <Link to="/about">Go to the About Page!</Link>
            <br />
            <LogoutButton />
        </div>
    );
};

export default HomePage;
