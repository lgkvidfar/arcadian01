import React, { useState } from 'react';
import { useLoginUserMutation } from '../../app/apis/userApi';
import { useAppDispatch } from '../../app/hooks';
import { removeNotificationSlice, setNotificationSlice } from '../../app/slices/notificationSlice';
import { setCurrentUserSlice } from '../../app/slices/userSlice';

const LoginForm = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const dispatch = useAppDispatch();
    const [loginUserRTK] = useLoginUserMutation();

    const handleLogin = async (event: { preventDefault: () => void }) => {
        event.preventDefault();
        try {
            console.log('made it here');

            const loggedUser = await loginUserRTK({ username, password }).unwrap();
            console.log(loggedUser);
            dispatch(setCurrentUserSlice(loggedUser));
            dispatch(
                setNotificationSlice({
                    message: `welcome back ${username}`,
                    error: false,
                })
            );
            setTimeout(() => {
                dispatch(removeNotificationSlice());
            }, 1500);
            setUsername('');
            setPassword('');
        } catch (err) {
            setUsername('');
            setPassword('');
            console.log(err);
            dispatch(
                setNotificationSlice({
                    message: `cannot log in with those credentials`,
                    error: true,
                })
            );
            setTimeout(() => {
                dispatch(removeNotificationSlice());
            }, 1500);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input
                placeholder="username"
                name="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <input
                placeholder="password"
                name="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button type="submit">login</button>
        </form>
    );
};

export default LoginForm;
