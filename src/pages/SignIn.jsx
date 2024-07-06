import React, { useEffect, useState } from "react";
import "./style/PagesStyle.scss";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUpStart, signUpSuccess, signUpFailure, signIn } from '../toolkit/slice/userSlice';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        dispatch(signUpStart());
        const { data } = await axios.get("http://localhost:3000/userData");
        const user = data.find(u => u.email === signInData.email);
        if (user) {
          if (user.password === signInData.password) {
            dispatch(signIn(user)); 
            navigate('/'); 
          } else {
            dispatch(signUpFailure("Incorrect password"));
          }
        } else {
          dispatch(signUpFailure("User not found"));
        }
      } catch (error) {
        dispatch(signUpFailure(error.message));
      }
    } else {
      alert('Please enter email and password');
    }
  };

  return (
    <div className="signUp">
      <div className="signUp__center">
        <div className="signUp__center--logo">
          <h1>Fasco</h1>
          <p>Sign In</p>
        </div>
        <div className="signUp__center--inputs">
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
        </div>
      </div>
    </div>
  );
};

export default SignIn;
