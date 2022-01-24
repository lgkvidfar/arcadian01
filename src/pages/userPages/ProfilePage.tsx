import React from 'react';
import { useAppSelector } from '../../app/hooks';

const ProfilePage = () => {
    const current = useAppSelector((state) => state.user.current);
    if (!current) {
        return <span>loading...</span>;
    }
    return <div>welcome {current.user.username}</div>;
};
export default ProfilePage;
