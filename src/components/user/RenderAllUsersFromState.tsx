import React from 'react';
import { useAppSelector } from '../../app/hooks';
import UserCard from './UserCard';

const RenderAllUsersFromState = () => {
    const users = useAppSelector((state) => state.user.users);
    return (
        <div>
            {users.map((user, index) => {
                return (
                    <UserCard
                        name={user.name}
                        username={user.username}
                        email={user.email}
                        id={user.id}
                        alive={user.alive}
                        key={index}
                    />
                );
            })}
        </div>
    );
};

export default RenderAllUsersFromState;
