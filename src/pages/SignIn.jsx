import React, { useState } from "react";
import "./style/PagesStyle.scss";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInSuccess, signInFailure, signInStart } from '../toolkit/slice/userSlice';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.user); // Ensure this selector is specific to signIn

  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    const { value, name } = e.target;

    setSignInData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = async () => {
    if (signInData.email && signInData.password) {
      try {
        dispatch(signInStart());
        const { data } = await axios.get("http://localhost:3000/userData");
        const user = data.find(u => u.email === signInData.email);
        if (user) {
          if (user.password === signInData.password) {
            dispatch(signInSuccess(user)); 
            navigate('/'); // Navigate to the home page on successful sign-in
          } else {
            dispatch(signInFailure("Incorrect password"));
          }
        } else {
          dispatch(signInFailure("User not found"));
        }
      } catch (error) {
        dispatch(signInFailure(error.message));
      }
    } else {
      alert('Please enter email and password');
    }
  };

  return (
    <div className="signIn">
      <div className="signIn__center">
        <div className="signIn__center--logo">
          <h1>Fasco</h1>
          <p>Sign In</p>
        </div>
        <div className="signIn__center--inputs">
          <div className="inputBox">
            <label htmlFor="email">Email</label>
            <input
              onChange={inputHandler}
              name="email"
              id="email"
              type="email"
            />
          </div>
          <div className="inputBox">
            <label htmlFor="password">Password</label>
            <input
              onChange={inputHandler}
              name="password"
              id="password"
              type="password"
            />
          </div>
          <button onClick={submitHandler}>Confirm</button>
          {error && <p className="error-message">{error}</p>} {/* Display error message specific to sign-in */}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
