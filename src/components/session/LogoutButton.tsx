import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { removeCurrentUserSlice } from '../../app/slices/userSlice';

const LogoutButton = () => {
    const dispatch = useAppDispatch();
    const handleLogout = () => {
        dispatch(removeCurrentUserSlice());
    };
    return (
        <div>
            <button onClick={handleLogout}>log out</button>
        </div>
    );
};

export default LogoutButton;
