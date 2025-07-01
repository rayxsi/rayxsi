import React from 'react';
import {fetchUsers} from '../../container/users';
import {getPreState} from "@oreodusk/pre-api-loader";
import {getSsrPreLoad} from '../../redux';
import {useSelector, useDispatch} from 'react-redux'
import Table from 'react-bootstrap/Table';
import './user.css'

getSsrPreLoad(() => {return getPreState(fetchUsers())})

function Users(props) {
    const users = useSelector(state => state.users);
    
    return (
        <div className='user-table'>
            <Table striped bordered hover>
                <thead className='th-col-red'>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>User name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.data.map(user => (<tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.website}</td>
                        </tr>))
                    }
                </tbody>
                </Table>
        </div>
    );
}

export default Users;