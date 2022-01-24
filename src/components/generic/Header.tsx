import React from 'react';

type IHeader = {
    text: string;
};

function Header({ text }: IHeader) {
    return <h3>{text}</h3>;
}

export default Header;
