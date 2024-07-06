import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUpStart, signUpSuccess, signUpFailure } from '../toolkit/slice/userSlice';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const useSignUp = () => {
    const dispatch = useDispatch();
    const [inputData, setInputData] = useState({
        name: '',
        email: '',
        password: '',
        rePassword: '',
    });

    const navigate = useNavigate()

    const { status, error } = useSelector((state) => state.user);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const nameRegex = /^.{3,12}$/; 
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,16})/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setInputData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSignUp = async () => {
        if (!nameRegex.test(inputData.name)) {
            setSnackbarSeverity('error');
            setSnackbarMessage('Name should be between 3 to 12 characters.');
            setOpenSnackbar(true);
            return;
        }

        if (!emailRegex.test(inputData.email)) {
            setSnackbarSeverity('error');
            setSnackbarMessage('Invalid email format.');
            setOpenSnackbar(true);
            return;
        }

        if (!passwordRegex.test(inputData.password)) {
            setSnackbarSeverity('error');
            setSnackbarMessage('Password should be 8 to 16 characters long and include a capital letter and special character.');
            setOpenSnackbar(true);
            return;
        }

        if (inputData.password !== inputData.rePassword) {
            setSnackbarSeverity('error');
            setSnackbarMessage('Passwords do not match.');
            setOpenSnackbar(true);
            return;
        }

        try {
            dispatch(signUpStart());

            navigate('/')

            const response = await axios.post('http://localhost:3000/userData', inputData);

            dispatch(signUpSuccess(response.data));

            setInputData({
                name: '',
                email: '',
                password: '',
                rePassword: '',
            });

            setSnackbarSeverity('success');
            setSnackbarMessage('Sign up successful!');
            setOpenSnackbar(true);
        } catch (error) {
            dispatch(signUpFailure(error.message));

            setSnackbarSeverity('error');
            setSnackbarMessage('Sign up failed. Please try again.');
            setOpenSnackbar(true);
        }
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    return {
        inputData,
        inputHandler,
        error,
        handleSignUp,
        handleCloseSnackbar,
        status,
        openSnackbar,
        snackbarSeverity,
        snackbarMessage,
    };
};

export default useSignUp;
