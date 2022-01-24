import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { deleteUserSlice, updateUserUsernameSlice } from '../../app/slices/userSlice';
import { IBasicUser } from '../../interfaces/iUser';

const UserCard = ({ name, username, email, id, alive }: IBasicUser) => {
    const [newUsername, setNewUsername] = useState('');
    const dispatch = useAppDispatch();

    const handleDeleteUser = () => {
        dispatch(deleteUserSlice(id));
    };

    const handleUpdateUsername = () => {
        const updatedUser = { name, id, email, alive, username: newUsername };
        dispatch(updateUserUsernameSlice(updatedUser));
        setNewUsername('');
    };

    return (
        <div>
            <span>
                {id} {email}
            </span>
            <h2>{username} </h2>

            <p>by: {name}</p>
            <h4>
                status | alive: {String(alive)}
                <button onClick={handleDeleteUser}>kill</button>
            </h4>
            <hr />
            <h4>
                update username? | {username}
                {/* <button onClick={handleUpdateUsername}>update</button> */}
            </h4>
            <input
                placeholder="new username"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
            />
            <button onClick={handleUpdateUsername}>change</button>
        </div>
    );
};

export default UserCard;
