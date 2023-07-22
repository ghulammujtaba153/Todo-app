import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { register } from '../../redux/actions/auth.js';
import { Link } from 'react-router-dom';
import { resetStore } from '../../redux/actions/reSet.js';


const Register = ({ register, authError }) => {
  const dispatch=useDispatch()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    image: null, 
  });

  const { name, email, password, image } = formData;

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      let reader=new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=()=>{
        console.log(reader.result);
        setFormData({ ...formData, [e.target.name]: reader.result });
      }
        
      
    } else {
      
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(formData);
  };

  return (
    <div className='register'>
      <h2 className='heading'>Register</h2>
      {authError && <p>{authError}</p>}
      <form className='reg-form' onSubmit={handleSubmit}>
        <input
          className='input'
          type='text'
          placeholder='name'
          name='name'
          value={name}
          onChange={handleChange}
          required
        />
        <input
          className='input'
          type='email'
          placeholder='email'
          name='email'
          value={email}
          onChange={handleChange}
          required
        />
        <input
          className='input'
          type='password'
          placeholder='password'
          name='password'
          value={password}
          onChange={handleChange}
          required
        />
        
        <input
          className='input'
          type='file'
          name='image'
          accept='image/*'
          onChange={handleChange}
        />
        <button className='reg-sbm-btn' type='submit'>
          Register
        </button>
      </form>
      
        <p>already have an account? <Link to={'/'} onClick={dispatch(resetStore())}>Login</Link></p>
      
    </div>
  );
};

const mapStateToProps = (state) => ({
  authError: state.auth.error,
});

export default connect(mapStateToProps, { register })(Register);
