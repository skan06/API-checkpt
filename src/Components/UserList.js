import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import UserCard from './UserCard';
import axios from 'axios';

const UserList = () => {
    const [error, setError] = useState();
    const [users, setUsers] = useState();
    useEffect(() => {
        const fetchData = async () => {
        try {
            const { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
            );
            setUsers(data);
        } catch (error) {
            setError(error);
        }
        };
        fetchData();
    }, []);
  return (
    <div className='crt'>
        {error ? (
        <Spinner animation="border" />
        ) : (
        users && users.map((el) => <UserCard x={el} key={el.id} />)
        )}
    </div>
  )
}

export default UserList