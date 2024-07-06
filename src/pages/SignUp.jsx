import React from 'react';
import useSignUp from '../hooks/useSignUp';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const SignUp = () => {
    const { inputData, inputHandler, error, handleSignUp, handleCloseSnackbar, status, openSnackbar, snackbarSeverity, snackbarMessage } = useSignUp();

    return (
        <div className="signUp">
            <div className="signUp__center">
                <div className="signUp__center--logo">
                    <h1>Fasco</h1>
                    <p>Sign Up</p>
                </div>
                <div className="signUp__center--inputs">
                    <div className="inputBox">
                        <label htmlFor="name">Name</label>
                        <input name="name" value={inputData.name} onChange={inputHandler} id="name" type="text" />
                    </div>
                    <div className="inputBox">
                        <label htmlFor="email">Email</label>
                        <input name="email" value={inputData.email} onChange={inputHandler} id="email" type="email" />
                    </div>
                    <div className="inputBox">
                        <label htmlFor="password">Password</label>
                        <input name="password" value={inputData.password} onChange={inputHandler} id="password" type="password" />
                    </div>
                    <div className="inputBox">
                        <label htmlFor="confirmP">Confirm Password</label>
                        <input name="rePassword" value={inputData.rePassword} onChange={inputHandler} id="confirmP" type="password" />
                    </div>
                    <button onClick={handleSignUp}>Confirm</button>
                    {status === 'loading' && <p>Loading...</p>}
                    {status === 'failed' && <p>{error}</p>}
                    <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
                            {snackbarMessage}
                        </Alert>
                    </Snackbar>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
