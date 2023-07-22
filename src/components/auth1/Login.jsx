import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions/auth.js';
import { Link, Navigate, useNavigate  } from 'react-router-dom';
import { resetStore } from '../../redux/actions/reSet.js';

const Login = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const authError = useSelector((state) => state.auth.error);
  

  const [formData, setFormData] = useState({
    
    name: '',
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    await dispatch(login(formData));
    // Handle the login response and redirect using the navigate function
    navigate('/home');
  };
  

  return (
    <div className='login'>
      <h2>Login</h2>
      {authError && <p>{authError}</p>}
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder='email' name="email" value={email} onChange={handleChange} required />
        <input type="password" placeholder='password' name="password" value={password} onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register" onClick={dispatch(resetStore)}>Register</Link>
      </p>
    </div>
  );
};

export default Login;
