import React from 'react';
import Header from '../../components/generic/Header';

import RenderAllUsersFromApi from '../../components/user/RenderAllUsersFromApi';
import RenderAllUsersFromState from '../../components/user/RenderAllUsersFromState';

const ListAllUsers = () => {
    return (
        <div>
            <Header text="list of all users" />
            <RenderAllUsersFromState />
            <RenderAllUsersFromApi />
        </div>
    );
};

export default ListAllUsers;
