import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Login = () => {
    const [logData, setLogData] = useState({
        email: '',
        password: ''
    })
    const [loggedUsers, setLoggedUsers] = useState([])

    const inputHandler = (e) => {
        const { name, value } = e.target;

        setLogData((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        const response = await axios.get('http://localhost:3000/users')
        if (response.status === 200) {
            setLoggedUsers(response.data)
        }
    }

    console.log(loggedUsers);

    const submitHandler = async () => {
        if (logData.email && logData.password) {
            
        }
    }

    console.log(logData);

    return (
        <div className='login'>
            <div className="inputs">
                <div>
                    <label htmlFor="">Email</label>
                    <input name='email' value={logData.name} onChange={inputHandler} type="text" />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input name='password' value={logData.password} onChange={inputHandler} type="password" />
                </div>
                <button>Submit</button>
            </div>
        </div>
    )
}

export default Login