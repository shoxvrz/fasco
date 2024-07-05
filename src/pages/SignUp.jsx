import React from 'react'


const SignUp = () => {
  return (
    <div className='signUp'>
        <div className="signUp__center">
            <div className="signUp__center--logo">
                <h1>Fasco</h1>
                <p>Sign Up</p>
            </div>
            <div className="signUp__center--inputs">
                <div className='inputBox'>
                    <label htmlFor="name">
                        Name
                    </label>
                    <input  id='name' type="email" />
                </div>
                <div className='inputBox'>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input  id='email' type="email" />
                </div>
                <div className='inputBox'>
                    <label htmlFor="password">
                        Password
                    </label>
                    <input  id='password' type="password" />
                </div>
                <div className='inputBox'>
                    <label htmlFor="confirmP">
                        Confirm Password
                    </label>
                    <input  id='confirmP' type="password" />
                </div>
                <button>Confirm</button>
            </div>
        </div>
    </div>
  )
}

export default SignUp