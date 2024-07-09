import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Sign = () => {
    const [inputData, setInputData] = useState({
        name: '',
        email: '',
        password: '',
        rePassword: ''
    })

    const navigate = useNavigate()

    const inputHandler = (e) => {
        const { name, value } = e.target;

        setInputData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const submitHandler = async () => {
        if(inputData.name && inputData.email && inputData.password && inputData.rePassword){
            if(inputData.password === inputData.rePassword){
                try {
                    const response = await axios.post('http://localhost:3000/users', inputData);
                    console.log('User data submitted successfully:', response.data);
                    navigate('/')
                } catch (error) {
                    console.error('Error submitting user data:', error);
                    alert('An error occurred while submitting user data. Please try again later.');
                }
            } else {
                alert('Passwords do not match');
            }
        } else {
            alert('Please fill in all required fields');
        }
    }

    console.log(inputData);

    return (
        <div className='sign'>
            <div className="inputs">
                <div>
                    <label htmlFor="">Name</label>
                    <input
                        onChange={inputHandler}
                        value={inputData.name}
                        name="name"
                        type="text"
                        placeholder='name'
                    />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input
                        onChange={inputHandler}
                        value={inputData.email}
                        name="email"
                        type="text"
                        placeholder='email'
                    />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input
                        onChange={inputHandler}
                        value={inputData.password}
                        name="password"
                        type="password"
                        placeholder='password'
                    />
                </div>
                <div>
                    <label htmlFor="">Again Password</label>
                    <input
                        onChange={inputHandler}
                        value={inputData.rePassword}
                        name="rePassword"
                        type="password"
                        placeholder='re-password'
                    />
                </div>
                <span style={{cursor: 'pointer'}} onClick={() => navigate('/login')}>login</span>
            </div>
            <button onClick={submitHandler}>submit</button>
        </div>
    )
}

export default Sign
