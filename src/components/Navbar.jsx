import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetStore } from '../redux/actions/reSet';

const Navbar = () => {
    const user=useSelector(state => state.auth.user);
    const dispatch =useDispatch();
    console.log(user.image)
    
  return (
    <nav className="navbar">
      <Link to={'/home'}><div className="logo">{user.name}</div></Link>
      <div className="account">
      <div className="avatar">
        
          
          {user.image ? (
            <img className='avatar-img' src={user.image} alt="Profile Pic" />
          ) : (
            <span>{user.name.charAt(0).toUpperCase()}</span>
          )}
        </div>
        <div className="links">
          <Link to="/account">Account</Link>
          <Link to="/" onClick={dispatch(resetStore())}>Sign Out</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
