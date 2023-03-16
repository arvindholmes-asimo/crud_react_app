import { React, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';


export default function Adduser() {

    let navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: ""
    })

    const { name, username, email, phone } = user;

    const onInputChange = (e) => {
        console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3001/users", user);
        navigate('/');
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
                    <button className='btn btn-primary btn-block'>Add User</button>
                </form>
            </div>

        </div>
    )
}
