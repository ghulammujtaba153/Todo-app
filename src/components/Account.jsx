import React, { useState } from 'react'
import { updateProfile } from '../redux/actions/auth';
import { useSelector } from 'react-redux';
import Link from 'react-dom'

const Account = () => {
    const user=useSelector(state=>state.auth.user)

    const [formData, setFormData] = useState({
        _id: user._id,
        name: user.name,
        email: user.email,
        password: user.password,
        
      });

      const handleChange = (e) => {
          
          setFormData({ ...formData, [e.target.name]: e.target.value });
        
      };

      

  return (
    <div className='Account-container'>
      <label>Name:</label>
        <input className='account-input' type="text" name='name' value={formData.name}  onChange={handleChange}/>
        <label>Email:</label>
        <input className='account-input' type="text" name='email' value={formData.email} onChange={handleChange}/>
        
        
    </div>
  )
}

export default Account