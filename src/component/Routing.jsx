/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import SignIn from "./login/SignIn";
import Policy from "./Policy/Policy";
import PolicyDetailsMain from "./Policy/PolicyDetailsMain";

const Routing = () => {
	return (
		
		
		<Routes>
			<Route path='/*' element={<Home/>} />
			<Route path='/auth' element={<SignIn />} />
			<Route path='/policy' element={<Policy />} />
			<Route path='/login/hr' element={< SignIn/>} />
			<Route path='/login/Recruiter' element={< SignIn/>} />
			<Route path='/login/employee' element={< SignIn/>} />
			<Route path='/policy/policyDetails' element={< PolicyDetailsMain/>}/>
		</Routes>
	
	);
};


export default Routing;
