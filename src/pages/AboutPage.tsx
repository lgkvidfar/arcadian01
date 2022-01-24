import React, { useState } from 'react';

const AboutPage = () => {
    const [message] = useState('welcome');

    return (
        <div>
            <p>This is the about page .</p>
            <p>{message}</p>
        </div>
    );
};

export default AboutPage;
