import React, { useState, useEffect } from 'react';

import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUser();

  }, []);

  const loadUser = () => {
    const result = axios.get("http://localhost:3001/users").then(res => {
      setUsers(res.data);
    });
    console.log(result);
  };
  const handleDelete = ((id) => {
    axios.delete(`http://localhost:3001/users/${id}`);
    loadUser();

  })

  return (
    <div className='container'>
      <div className='py-4'>

        <h1>Home</h1>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr className='bg-dark text-white'>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Username </th>
                <th scope="col">Emails</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                users && users.map((user, index) => {
                  return <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      <Link className='btn m-2 ' to={`/users/${user.id}`}><i className="fa-solid fa-eye"></i></Link>
                      <Link className='btn  m-2 ' to={`/users/edit/${user.id}`}><i className="fa-solid fa-pen-to-square"></i></Link>
                      <Link className='btn m-2 ' onClick={() => { handleDelete(user.id) }}><i className="fa-solid fa-trash"></i></Link>
                    </td>
                  </tr>
                })
              };
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
