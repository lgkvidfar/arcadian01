import React from 'react';

type ISubHeader = {
    text: string;
};

function SubHeader({ text }: ISubHeader) {
    return (
        <span>
            <hr />
            {text}
            <hr />
        </span>
    );
}

export default SubHeader;
