import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


export default function EditUser() {

    let navigate = useNavigate();
    const { id } = useParams();
    console.log(id);

    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        phone: ''
    })

    const { name, username, email, phone } = user;
    
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3001/users/${id}`, user);
        navigate('/');
    }


    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3001/users/${id}`)

        setUser(result.data);

        console.log(result);
    }
    return (
        <div className='container'>
            <div className='w-75 mx-auto shadow p-5'>
                <h2 className='text-center mb-4'>Add A User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className='form-group'>
                        <input type={'text'} className='form-control form-control-lg'
                            placeholder='Enter Your name' name='name' value={name}
                            onChange={e => onInputChange(e)} />
                    </div>
                    <div className='form-group'>
                        <input type={'email'} className='form-control form-control-lg'
                            placeholder='Enter Your email' name='email' value={email}
                            onChange={e => onInputChange(e)} />
                    </div>
                    <div className='form-group'>
                        <input type={'text'} className='form-control form-control-lg'
                            placeholder='Enter Your name' name='username' value={username}
                            onChange={e => onInputChange(e)} />
                    </div>
                    <div className='form-group'>
                        <input type={'phone'} className='form-control form-control-lg'
                            placeholder='Enter Your Phone Number' name='phone' value={phone}
                            onChange={e => onInputChange(e)} />
                    </div>
                    <button type="submit" className="btn btn-warning btn-block">Update User</button>
                </form>
            </div>


        </div>
    )
}
