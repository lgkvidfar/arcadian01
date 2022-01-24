import React from 'react';
import { useAppSelector } from '../../../app/hooks';

const Notification = () => {
    const message = useAppSelector((state) => state.notification.message);
    const style = {
        border: 'solid',
        padding: 10,
        borderWidth: 2,
    };
    if (message) {
        return <div style={style}>{message}</div>;
    } else {
        return null;
    }
};

export default Notification;
