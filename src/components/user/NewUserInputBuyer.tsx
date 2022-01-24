import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { useAppDispatch } from '../../app/hooks';
import { useCreateOneUserMutation } from '../../app/apis/userApi';
import { removeNotificationSlice, setNotificationSlice } from '../../app/slices/notificationSlice';
import { addUserSlice } from '../../app/slices/userSlice';

const NewUserInput = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const dispatch = useAppDispatch();
    const [addUserRTK] = useCreateOneUserMutation();

    const handleRegister = async (event: { preventDefault: () => void }) => {
        event.preventDefault();
        try {
            const newUser = {
                username,
                password,
                name,
                email,
                buyer: true,
                admin: false,
                seller: false,
                id: uuid(),
                alive: true,
            };

            await addUserRTK(newUser).unwrap();
            dispatch(addUserSlice(newUser));
            dispatch(
                setNotificationSlice({
                    message: `success! welcome ${newUser.username}`,
                    error: false,
                })
            );
            setTimeout(() => {
                dispatch(removeNotificationSlice());
            }, 2000);
            setUsername('');
            setPassword('');
            setEmail('');
            setName('');
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            console.log(err);
            dispatch(
                setNotificationSlice({
                    message: err.data.message,
                    error: true,
                })
            );
            setTimeout(() => {
                dispatch(removeNotificationSlice());
            }, 1500);
        }
    };
    return (
        <div>
            <form onSubmit={handleRegister}>
                <input
                    placeholder="username"
                    name="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required={true}
                />
                <br />
                <input
                    placeholder="password"
                    name="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required={true}
                />
                <br />
                <input
                    placeholder="name"
                    name="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required={true}
                />
                <br />
                <input
                    placeholder="email"
                    name="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required={true}
                />
                <br />
                <button type="submit">register</button>
            </form>
        </div>
    );
};

export default NewUserInput;
