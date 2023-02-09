/** @format */

import React from "react";
// import loginimage from "../../assite/images/city-4.jpg";
import loginimage from "../../assite/images/login-pic-left-side2.svg";
import userIcon from "../../assite/images/user-icon.png";
import passIcon from "../../assite/images/password-icon.png";
import { NavLink } from "react-router-dom";

const SignIn = () => {
	return (
		<div className='login-cantainer'>
			<div className='Left-login'>
				<img src={loginimage} alt='mainimg' />
			</div>
			<div className='Right-login'>
				<h1>Log In</h1>
				<div className='login-type-navbar'>
					<NavLink to='/login/hr' className='login-type' activeClassName='active'>
						<p>HR</p>
					</NavLink>
					<NavLink to='/login/Recruiter' className='login-type' activeClassName='active'>
						<p>Recruiter</p>
					</NavLink>
					<NavLink to='/login/employee' className='login-type' activeClassName='active'>
						<p>Employee</p>
					</NavLink>
				</div>
				<div>
					<img
						src={userIcon}
						className='login-username-icon'
						alt='usermane-img'
					/>
					<input
						type='text'
						className='login-input-username'
						placeholder='username'
					/>
				</div>
				<div>
					<img
						src={passIcon}
						className='login-password-icon'
						alt='password-img'
					/>

					<input
						type='password'
						className='login-input-password'
						placeholder='password'
					/>
				</div>
				<div className='login-checkbox-box'>
					<input type='checkbox' />
					<h5 className='login-remember-me'>Remember me</h5>
					<h5 className='login-forget-password'>Forget password?</h5>
				</div>
				<br />
				<button className='login-button'>Log in</button>
			</div>
		</div>
	);
};

export default SignIn;
