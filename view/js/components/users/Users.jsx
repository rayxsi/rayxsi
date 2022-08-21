import React from 'react';
import {fetchUsers} from '../../container/users';
import {getPreState} from "@oreodusk/pre-api-loader";
import {getSsrPreLoad} from '../../redux';
import {useSelector, useDispatch} from 'react-redux'
import './user.css'

getSsrPreLoad(() => {return getPreState(fetchUsers())})

function Users(props) {
    const users = useSelector(state => state.users);

    return (
        <div>
            {
                users.data.map(user => <h5 key={user.id}>{user.name}</h5>)
            }
        </div>
    );
}

export default Users;